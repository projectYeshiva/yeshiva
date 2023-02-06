const mongoose = require("mongoose");
const diariesTeamModel = new mongoose.Schema({
  סדר: {
    type: Strineamg,
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
