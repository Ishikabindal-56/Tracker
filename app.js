const { urlencoded } = require("express");
const express = require("express");
const app=express();
const router = require("./routers/userRouters");
const methodOverride = require("method-override");
const seedData = require("./Seed");
require("dotenv").config();

const port=process.env.PORT || 5000;

const mongoose=require("mongoose");

mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log("database connected successfuly");
}).catch(()=>{
    console.log("database not connected");
});


const path =  require("path");

app.set("view engine","ejs");
app.use(urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));
app.use(router);


//seeding database
// seedData();

// app.get("/",(req,res)=>{
//     // res.send("connected");
//     res.render("./tracker/index");
// })



app.listen(port,()=>{
    console.log("Listening to port no. 5000");
})