const mongoose= require("mongoose");
const validator =require("validator");
const eCommerceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("not valid Email address")
            }
        }
    },
    password:{
        type:Number,
        maxlength:10
    },
    token:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
    
  });
  
  // Create a model based on the schema
  const eCommerce = mongoose.model('eCommerce', eCommerceSchema);
  
  module.exports = eCommerce;