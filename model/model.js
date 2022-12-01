const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    phone : {
        type:String,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    }
})

let entry = new mongoose.model("subscribe",schema)
module.exports = entry