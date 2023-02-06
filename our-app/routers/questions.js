const mongoose = require("mongoose");
const express = require("express");
const questionsModel = require("../models/questions");
const router = new express.Router();

//שמירת השאלות
router.post("/questions/save", async (req, res) => {
  try {
    console.log(req.body);
    const questions = new questionsModel(req.body);    
    await questions.save();
    res.send("Added successfully");
  } catch (error) {
    res.send(error);
  }
});

//קבלת כל השאלות
router.get("/questions/getAllQuestions", async (req, res) => {
  try {
    const allQuestions = await questionsModel.find({});
    res.send(allQuestions);
  } catch (error) {
    res.send(error);
  }
});

//קבלת השאלות לפי סינון
router.post("/questions/getQuestions", async (req, res) => {
  try {
    const{}=req.body
  } catch (error) {
    res.send(error);
  }
});
//מחיקת שאלה

module.exports = router;
