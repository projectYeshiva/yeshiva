const express=require('express')
const app=express()
const mongoose=require('mongoose')
require("dotenv").config();
//const taskRouter = require("./routers/task");
const port=process.env.PORT
//app.use(taskRouter);


mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fwidp.mongodb.net/?retryWrites=true&w=majority`
  );

  console.log(mongoose.connection.readyState);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
