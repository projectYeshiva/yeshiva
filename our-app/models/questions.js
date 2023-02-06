const mongoose=require("mongoose")
const questionsModel=new mongoose.Schema({
    zzz:{
        type:String}
    // },
    // מסכת:{
    //     type:String
    // },
    // סוג:{
    //     type:String
    // },
    //  פרק:{
    //     type:String
    // },
    // דף:{
    //     type:String
    // },
    // עמוד:{
    //     type:String
    // }

})

module.exports=mongoose.model("questions",questionsModel)