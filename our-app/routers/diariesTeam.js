const mongoose=require('mongoose')
const express=require('express')
const diariesTeamModel=require('../models/diariesTeam')
const router=new express.Router()

//שמירת הספקים מגמה
router.post('diariesTeam/save',async(req,res)=>{
    try{
        const diariesTeam=new diariesTeamModel(req.body)
        await diariesTeam.save()
        res.send("Saved successfully!!");

    }catch (error) {
    res.send(error);
  }
})





module.exports = router;
