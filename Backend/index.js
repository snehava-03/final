const express = require("express");
const cors = require("cors");
require("./connection")
const BlogModel = require('./model'); 

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here

//Write your POST API here

app.post("/add", async (req, res) => {
  try {
    const{ title,content,img_url}=req.body;
    const newb=new BlogModel({title,content,img_url});
     await newb.save();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});



app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
