import express from "express"
const app = express()
const port = 3000;
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})
app.get("/",function(req,res){
    res.render("views/index.ejs")
})