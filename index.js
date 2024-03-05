const express = require("express");

const app = express();

const port =8080;

let posts = [
    {
        user:"sougata",
        content:"I love coding"
    },
    {
        user:"sougata",
        content:"I love coding"
    },
    {
        user:"sougata",
        content:"I love coding"
    }
];

app.listen(port , ()=>{
    console.log("app is running");
});

app.set("view engine" ,"ejs" );

app.get("/posts" , (req , res)=>{
    res.render("home.ejs" ,{posts} );
});
