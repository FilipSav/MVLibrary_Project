const getVideo = require("express").Router();
const videos = require("../../models/video")
getVideo.get("/get-video",(req,res) => {
   videos.find({},(err,docs) => {
       if(err){
           return res.json({
               msg:"Wasnt able to get video",
               documents:[]
           })
       }else{
           return res.json({
               msg:"Was succesfuly able to get video",
               documents:docs
           })
       }
   })
})

module.exports = getVideo;