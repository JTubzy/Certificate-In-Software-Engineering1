const express= require ('express');
const router=express.Router();
const app =express();
const mongoose= require('mongoose')
const session= require('express-session')
const path =require('path');



const config = require ('./config/database')
const registerRoutes= require("./routes/registerRoutes");

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized:false
}))
const bodyParser = require('body-parser');


//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of applicattion/x-www-form-urlencode-post data
app.use(bodyParser.urlencoded({extended: true}));

//creating a connection between controller and the database
mongoose.connect (config.database,{
    //collects data from the front end and formats it
    
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    
    const db= mongoose.connection
    
    //checking if it has connected
    db.once("open", () => {
    console.log("connected to db")
    })
    
    db.on("error",(err) =>{
        console.error(err)
    })
    

    
    
    app.set("view engine","pug")
    app.set("views",path.join(__dirname,"views"))
    
    app.use(express.static(path.join(__dirname,"public")));
    
    // router.get("/form",(req,res)=>{
    //     res.render("form")
    // })
       
    app.use("/",registerRoutes);

    app.get("*", (req,res)=>{
        res.status(404).send ("page doesnt exist")
      })

    app.listen(process.env.port||3000,() =>
console.log('listening on port 3000'));