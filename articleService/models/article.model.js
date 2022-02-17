const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    timestamp: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    tags:{
        type: Array,
        required: false
        
    }
    }); 
const app = mongoose.model('article', articleSchema);

module.exports = app;