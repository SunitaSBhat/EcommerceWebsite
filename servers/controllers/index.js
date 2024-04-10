const express=require("express");
const eCommerce = require("../modules/inde");

const Sigin=((req, res)=>{
    return res.json("hai");
})
const SigininPost=( async (req, res)=>{
  const {name, email, password} = req.body;
  if(!name || !email || !password){
  res.status(422).json({error:"Fill all field"})
  }
  try{
    const preuser=await eCommerce.findOne(({email:email}))
    if(preuser){
      res.status(422).json({erro:"This user already exists"})
    }
    else{
     const finaluser = new eCommerce({
        name, email, password
      })
      const storedData = await finaluser.save();
      return res.status(200).json(storedData);
    }
   
  }
  catch(error){
    console.error("error occured" +error);
  }
  
});
module.exports={
     Sigin, SigininPost
}