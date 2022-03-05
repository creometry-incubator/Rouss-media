const router = require("express").Router();
const Author = require("../models/author.model")
var jwt = require('jsonwebtoken');

router.route('/').get(async (req, res)=>{
    let authors = await Author.find();
    res.json(authors);
})

router.route('/:id').get(async (req, res)=>{
    let author = await Author.findById(req.params.id);
    res.json(author);
})

router.route('/private').post(async (req, res)=>{
    
})

router.route("/sign").post(async (req, res)=>{
    let author = await Author.findOne({email: req.body.profileObj.email});
    if(author){
        var token = jwt.sign({...author._doc}, "privateKey");
        res.json({token: token});
    }else{
        res.json("not permitted")
    }
})
module.exports = router;
