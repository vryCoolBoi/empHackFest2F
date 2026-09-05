import express from "express"
const app = express()
const port = 3000;
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})
app.get("/",function(req,res){
    res.render("index.ejs")
})
app.get("/about",function(req,res){
    res.render("about.ejs")
})
app.get("/leaderboard",function(req,res){
    res.render("leaderboard.ejs")
})
app.get("/maps",function(req,res){
    res.render("maps.ejs")
})
app.get("/policies",function(req,res){
    res.render("policies.ejs")
})
app.get("/report",function(req,res){
    res.render("report.ejs")
})
app.get("/signin",function(req,res){
    res.render("signin.ejs")
})
app.get("/signup",function(req,res){
    res.render("singup.ejs")
})