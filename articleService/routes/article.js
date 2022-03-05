const router = require("express").Router();
let fs = require('fs');
const Article = require("../models/article.model")
const multer = require("multer");
const path = require("path");
const upload = multer({
    dest: "./images"
  });

router.route('/').get(async (req, res)=>{
    let filter = req.query.filter
    let articles = await Article.find(filter?{$or: [{"tags.id": filter}, {"title": filter}]}: null);
    res.json(articles);
})

router.route('/:id').get(async (req, res)=>{
    try{
        let content = fs.readFileSync("./articles/"+req.params.id+".html", 'utf8')
        article = await Article.findById(req.params.id);
        res.json({...article._doc, content: content});
    }catch(err){
        res.json(err)
    }
    
})

router.put('/:id', upload.single("file"), async (req, res)=>{
    try{
        fs.writeFile("./articles/"+req.params.id+".html", req.body.content, err=>{if(err)console.log(err)});
        if(req.file){
            const tempPath = req.file.path;
        
            fs.rename(tempPath,"./images/"+req.params.id+".png", err=>{
                if(err) console.log(err)
            })
        }
        
        let article = await Article.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            tags: JSON.parse(req.body.tags)
        });
        res.json(article);
    }
    catch(err){
        res.json(err)
    }
    
})
router.route('/:id').delete(async (req, res)=>{
    try{
        fs.rmSync("./articles/"+req.params.id+".html");
        fs.rmSync("./images/"+req.params.id+".png");
        await Article.findByIdAndDelete(req.params.id);
        res.json("article deleted");
    }
    catch(err){
        res.json(err)
    }
    

})


router.post('/', upload.single("file"), async (req, res)=>{
    try{
        let article = new Article({title: req.body.title, timestamp: new Date()+"", tags: JSON.parse(req.body.tags) });
        article = await article.save();
        const tempPath = req.file.path;
        
        fs.rename(tempPath,"./images/"+article._id+".png", err=>{
            if(err) console.log(err)
        })
        fs.writeFile("./articles/"+article._id+".html", req.body.content, err=>{if(err) console.log(err)});
        res.json(article);
    }
    catch(err){
        res.json(err)
    }
    
})
router.route('/image/:id').get(async (req, res)=>{
    try {
        res.sendFile(path.join(__dirname, "../images/"+req.params.id+".png"));
      } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
      }
})
module.exports = router;
