const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://2003snehava:sneha2003@cluster0.z41gcaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   

  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
