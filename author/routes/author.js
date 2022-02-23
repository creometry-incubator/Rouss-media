const router = require("express").Router();
const Author = require("../models/author.model")

router.route('/').get(async (req, res)=>{
    let authors = await Author.find();
    res.json(authors);
})

module.exports = router;
