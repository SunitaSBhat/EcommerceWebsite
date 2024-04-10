const express=require('express');
const path=require("path");
const mongoose=require("mongoose");
const router= require("./routers/index");
const eCommerce = require("./modules/inde");
const bodyParser = require("body-parser")
const cors = require("cors");
const app=express();
const port=8000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceProduct', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');
});
app.get("/", (req, res)=>{
    return res.json("Hai");
})
try{
app.use("/home", router);
}
catch(error){
    console.log(error);
}
app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
})