const express=require("express")
const app = express();
app.set("view engine","esj");
app.get("/",(req,res)=>{
    res.render('home')
})
app.listen(3000,()=>{
    console.log("your server is at port 3000")
})