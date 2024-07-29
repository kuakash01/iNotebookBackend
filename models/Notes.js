const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
})

module.exports = new mongoose.model("note", NotesSchema);