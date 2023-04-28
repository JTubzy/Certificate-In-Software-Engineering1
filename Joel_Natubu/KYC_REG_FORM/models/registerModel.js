const mongoose= require('mongoose');


const registerSchema = new mongoose.Schema({

    phone1:{
        type:String,
        trim:true

    },
    phone2:{
        type:String,
        trim:true

    },

firstname:{
type:String,
trim:true
},
lastname:{
type:String,
trim:true
},
gender:{
type:String,
trim:true
},
Email:{
    type:String,
    trim:true,
    unique:true,
       },
Country:{
type:String,
trim:true
},
Dob:{
type:String,
trim:true
},
state:{
    type:String,
    trim:true
},
town:{
    type:String,
    trim:true
},
zipcode:{
    type:String,
    trim:true
}
})


 module.exports = mongoose.model("Register", registerSchema)