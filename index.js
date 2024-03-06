const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); 

let posts = [
    {
        user: "sougata",
        content: "I love coding"
    },
    {
        user: "sougata",
        content: "I love coding"
    },
    {
        user: "sougata",
        content: "I love coding"
    }
];

app.listen(port, () => {
    console.log("app is running");
});

app.set("view engine", "ejs");

app.get("/posts", (req, res) => {
    res.render("home.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("newpost.ejs");
});

app.post("/posts", (req, res) => {
    const { user, content } = req.body; 
    posts.push({user , content})
    res.redirect("/posts");
});
