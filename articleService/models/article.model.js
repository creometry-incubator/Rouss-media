const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    tags:{
        type: Array,
        required: false
        
    },
    authorId:{
        type: String,
        required: true
    }
    }, 
    {
        timestamps: true
    }); 
const app = mongoose.model('article', articleSchema);

module.exports = app;