const mongoose = require ('mongoose');

const dataSchema = new mongoose.Schema({
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

const Register = new mongoose.model("SubData",dataSchema);

module.exports = Register;