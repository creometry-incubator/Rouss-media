const router = require("express").Router();
let fs = require('fs');
const Article = require("../models/article.model")
const multer = require("multer");

const upload = multer({
    dest: "./images"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
  });
router.route('/').post(async (req, res)=>{
    try{
        console.log(req);
        let article = new Article({title: req.body.title, timestamp: new Date()+""});
        article = await article.save();
        fs.writeFile("./articles/"+article._id+".html", req.body.content, err=>console.log(err));
        res.json(article);
    }
    catch(err){
        res.json(err)
    }
    
});

router.route('/').get(async (req, res)=>{

    let articles = await Article.find();
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

router.route('/:id').put(async (req, res)=>{
    try{
        fs.writeFile("./articles/"+req.params.id+".html", req.body.content, err=>console.log(err));
        let article = await Article.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
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
        await Article.findByIdAndDelete(req.params.id);
        res.json("article deleted");
    }
    catch(err){
        res.json(err)
    }
    

})


router.post('/upload', upload.single("file"), async (req, res)=>{
    try{
        let article = new Article({title: req.body.title, timestamp: new Date()+""});
        article = await article.save();
        console.log("aziz");
        const tempPath = req.file.path;
        
        fs.rename(tempPath,"./images/"+article._id+".png", err=>{
            if(err) console.log(err)
        })
        fs.writeFile("./articles/"+article._id+".html", req.body.content, err=>console.log(err));
        res.json(article);
    }
    catch(err){
        res.json(err)
    }
    
})

module.exports = router;
