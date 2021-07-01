const express = require("express");
const pathj = require("path");
const app = express();
const port = process.env.PORT || 8000;

const pa = pathj.join(__dirname ,"./public")
console.log(pa)
app.use(express.static(pa))



app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(port),()=>{
    console.log(`listen the ${port} sucessful`);
};