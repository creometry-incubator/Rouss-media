const router = require("express").Router();
let fs = require('fs');
const Article = require("../models/article.model")


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

router.put('/:id', async (req, res)=>{
    try{
        fs.writeFile("./articles/"+req.params.id+".html", req.body.content, err=>{if(err)console.log(err)});
        let article = await Article.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            tags: req.body.tags
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
        console.log(err)
        res.json(err)
    }
    

})


router.post('/', async (req, res)=>{
    try{
        let article = new Article({title: req.body.title, tags: req.body.tags, authorId: req.body.authorId, imageLink: req.body.imageLink });
        article = await article.save();   
        fs.writeFile("./articles/"+article._id+".html", req.body.content, err=>{if(err) console.log(err)});        
        res.json(article);
    }
    catch(err){
        console.log(err)
        res.json(err)
    }
    
})

module.exports = router;
