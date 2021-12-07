const express = require("express") ;
var router = express.Router() ;
const User = require("../models/user.model") ;

router.post('/validate', (req, res, next) => {
    // const { body } = req;
    // const { password } = body;
    const password = req.body.password ;
    const email = req.body.email ;
    console.log("Hello in login") ;
    console.log(email) ;
    User.findOne({email : email }, (err, user) => {
        console.log("In Login.js printing User ", user) ;
        if(err){
            console.log('err 2:', err);
            return res.send({
                success: false,
                message: 'Error: Server Error. Please check your internet connection'
            });
        }
        else if (!user) {
            return res.send({
                success: false,
                message: 'Error: Invalid Email Id'
            });
        }
        //const user = user[0];
        else if (user.password != password) {
            return res.send({
                success: false,
                message: 'Error: Incorrect Password'
            });
        }
        else{
            console.log(user) ;
            return res.send({
                success : true ,
                message : "Correct User in login" ,
                name : user.name ,
            })
        }
    });
});

module.exports = router ;