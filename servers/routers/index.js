const express=require("express");
const { Sigin, SigininPost}=require("../controllers/index")
const router=express.Router();

router.get("/login", (req, res)=>{
    return res.json("hai");
});
router.post("/login", SigininPost);
module.exports=router;