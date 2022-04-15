const router = require("express").Router();
let fs = require('fs');
const Article = require("../models/article.model")
const Author = require("../models/author.model")

const jwt = require("jsonwebtoken")

router.route('/').get(async (req, res)=>{
    let filter = req.query.filter
    Article.find(filter?{$or: [{"tags.id": filter}, {"title": filter}]}: null)
    .populate("author").exec((err, articles)=>{
        if(err) {
            res.json(err);
            return;
        }
        res.json(articles)
    });
    
})

router.route('/:id').get(async (req, res)=>{
    try{
        let content = fs.readFileSync("./articles/"+req.params.id+".html", 'utf8')
        await Article.findById(req.params.id).populate("author").exec(async (err, article)=>{
            if(err) {
                res.json(err);
                return;
            }
            article.views = article.views + 1;
            await article.save();
            res.json({...article._doc, content: content});        
        });
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
        let author = jwt.decode(req.body.authorId);
        let article = new Article({title: req.body.title, tags: req.body.tags, author: author._id, imageLink: req.body.imageLink });
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
