const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo", function(req, res)  {
    console.log("hello ");
})

app.get("/todo", function(req, res)  {

})

app.put("/completed", function(req, res) {

})



app.listen(3000, () =>{
    console.log("server is running on port 3000");
})