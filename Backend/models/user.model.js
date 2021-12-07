const mongoose = require("mongoose") ;
// const bcrypt = require('bcrypt') ;

// If you forget the password then remember the pasword is "hello1234"

const Schema = mongoose.Schema ;

const userSchema = new Schema({
    name : {
      type : String ,
      required  : true ,
    },
    email : {
        type : String ,
        required : true ,
    } ,
    password : {
        type : String ,
        required : true ,
    } ,
})

/*staffSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
staffSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };*/

module.exports = mongoose.model('User' ,userSchema) ;
