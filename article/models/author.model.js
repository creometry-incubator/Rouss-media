const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
    }); 
const app = mongoose.model('author', authorSchema);

module.exports = app;