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
    author:{
        type: Schema.Types.ObjectId,
        ref: "author",
        required: true
    },
    imageLink:{
        type: String,
    },
    views:{
        type: Number,
        default: 0,
        required: true
    }
    }, 
    {
        timestamps: true
    }); 
const app = mongoose.model('article', articleSchema);

module.exports = app;