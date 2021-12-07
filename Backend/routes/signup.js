const express = require("express") ;
var router = express.Router() ;
const User = require("../models/user.model") ;


router.post("/add" , (req , res) => {

    const email = req.body.email ;
    const password = req.body.password ;
    const name = req.body.name ;
    console.log("In signup") ;
    User.findOne({
        email : email
        }, (err, user) => {
            if(err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error in signup'
                });
            }
            else if(user) {
                return res.send({
                    success: false,
                    message: 'Error: Account already exist for this Email.'
                });
            }
            else{
                const newUser = new User({email , password , name}) ;
                // newUser.password = newUser.generateHash(password);
                newUser.save()
                .then(() => {
                    return res.send({
                    success: true,
                    message: 'Success : Account Created Successfully. Please Login To Access Your Account' ,
                    
                    })
                })
                .catch((err) =>{
                    console.log(err) ;
                    return res.send({
                        success: false,
                        message: 'Error: Server error in signup'})
                })
            }
        }
    )
})

module.exports = router ;