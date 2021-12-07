const express = require("express") ;
var router = express.Router() ;
const Registration = require("../models/registration.model") ;

router.post('/add', (req, res, next) => {
    // const { body } = req;
    // const { password } = body;
    const lastname = req.body.lastname ;
    const firstname = req.body.firstname ;
    const phone = req.body.phone ;
    const dateOfBirth = req.body.dateOfBirth ;
    const email = req.body.email ;
    const gender = req.body.gender ;
    const address = req.body.address ;
    const city = req.body.city ;
    console.log("Hello in register backend") ;
    console.log("Ye aaya hai frontend se backend mein ", req.body) ;
    Registration.findOne({
        email : email
        }, (err, registered) => {
            if(err) {
                console.log("1") ;
                return res.send({
                    success: false,
                    message: 'Error: Server error in registration'
                });
            }
            else if(registered) {
                console.log("2", registered) ;
                return res.send({
                    success: false,
                    message: 'Error: You have already registered.'
                });
            }
            else{
                console.log("3");
                const registerationObj = new Registration({firstname , lastname , email, phone , dateOfBirth , gender , address , city}) ;
                // registerationObj.password = registerationObj.generateHash(password);
                registerationObj.save()
                .then(() => {
                    return res.send({
                    success: true,
                    message: 'Success : User Registered Succefully' ,
                    
                    })
                })
                .catch((err) =>{
                    console.log(err) ;
                    return res.send({
                        success: false,
                        message: 'Error: Server error in registration'})
                })
            }
        }
    )
});

module.exports = router ;