const express=require('express')
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')
require("dotenv").config();
const questionsRouter = require("./routers/questions");
const diariesTeamRouter=require('./routers/diariesTeam')
const port=process.env.PORT
app.use(questionsRouter);
app.use(diariesTeamRouter)



app.use(cors())


mongoose.connect(
 `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.r0pdciv.mongodb.net/?retryWrites=true&w=majority`)

  console.log(mongoose.connection.readyState);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

//mongodb+srv://final-project:final-project@cluster0.r0pdciv.mongodb.net/test