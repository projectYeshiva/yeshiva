const mongoose = require("mongoose");
const diariesTeamModel = new mongoose.Schema({
  סדר: {
    type: String,
  },
  תקופה: {
    type: String,
  },
  מסכת: {
    type: String,
  },
  סוג: {
    type: String,
  },
  קוד: {
    type: String,
  },
});
module.exports=mongoose.model('diaries',diariesTeamModel)
