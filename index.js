import express from "express"
import bcrypt from "bcrypt"
const app = express()
const port = 3000;
const users = []
let isLoggedIn = false;
let currentUser = "";
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})
app.get("/",function(req,res){
    res.render("index.ejs",{isLoggedIn,currentUser})
})
app.get("/about",function(req,res){
    res.render("about.ejs",{isLoggedIn,currentUser})
})
app.get("/leaderboard",function(req,res){
    res.render("leaderboard.ejs",{isLoggedIn,currentUser})
})
app.get("/maps",function(req,res){
    res.render("maps.ejs",{isLoggedIn,currentUser})
})
app.get("/policies",function(req,res){
    res.render("policies.ejs",{isLoggedIn,currentUser})
})
app.get("/report",function(req,res){
    res.render("report.ejs",{isLoggedIn,currentUser})
})
app.get("/signin",function(req,res){
    res.render("signin.ejs",{isLoggedIn,currentUser})
})
app.get("/signup",function(req,res){
    res.render("signup.ejs",{isLoggedIn,currentUser})
})
app.post("/submit",function(req,res){
    res.render("/report",{isLoggedIn,currentUser})

})
app.post("/create",async function(req,res){
    console.log("Trying to create")
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    const hash = await bcrypt.hash(password,11)
    users.push({
        username,
        email,
        password: hash 
    })
    res.render("signup.ejs", {isLoggedIn,currentUser,success:true})
    
})
app.post("/login",async function(req,res){
    let username = req.body.username
    let password = req.body.password
    console.log("attempted")
    const user = users.find(u => u.username === username)
    if (!user){
        res.render("signin.ejs",{isLoggedIn,currentUser, status:1})
        return
    }
    const isValid = bcrypt.compare(password, user.password)
    if (!isValid){
        res.render("signin.ejs",{isLoggedIn,currentUser,status:2})
        return
    }
    isLoggedIn = true;
    currentUser= username
    res.render("signin.ejs",{isLoggedIn,currentUser,status:3})
    
    // Status: 1: User not found 2: Unauthorized 3: Successful
    
    
})