const express = require('express') ;
const cors = require("cors") ;
const mongoose = require("mongoose") ;


const login = require("./routes/login") ;
const signup = require("./routes/signup") ;
const registeration = require("./routes/register") ;

const uri = "mongodb+srv://aditya:Adi%401234@englishguru.qiquq.mongodb.net/english?retryWrites=true&w=majority" ;

mongoose.connect(uri , {useNewUrlParser : true , useUnifiedTopology : true }) ;

const db = mongoose.connection ;
db.on('error' , console.error.bind(console , 'Connection Error : ')) ;
db.once('open' , ()=>{
    console.log("Hello World we are connected with database.") ;
})


require("dotenv").config() ;
const app = express() ;

const port = process.env.PORT || 5000 ;


app.use(cors()) ;
app.use(express.json()) ;

app.use("/englishguru/login" , login) ;
app.use("/englishguru/signup" , signup) ;
app.use("/englishguru/register" , registeration) ;


app.get("/" , function(req , res){
    res.send("<h1>Hello I am Aditya</h1>") ;
})

app.listen(port , ()=>{
    console.log(`Server running on port : ${port}`) ;
})