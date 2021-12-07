const mongoose = require("mongoose") ;

const Schema = mongoose.Schema ;
const registrationSchema = new Schema({
    firstname : {
        type : String ,
        required : true ,
    } ,
    lastname : {
        type : String ,
    } ,
    email : {
        type : String ,
        required: [true, "Cannot create user without email "] ,
        lowercase: true ,
        trim: true  ,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
        }
    } ,
    phone: {
        type: String,
        maxlength : 10 ,
    },
    dateOfBirth : {
        type: Date,
        required: true,
        trim: true,
    },
    gender : {
        type : String ,
        required : true ,
    },
    address : {
        type : String ,
        required : true ,
    } ,
    city : {
        type : String ,
        required : true ,
    } 
})

module.exports = mongoose.model('form' , registrationSchema) ;
