const SaveVideo = require("express").Router();
const modelVideo = require("../../models/video");

SaveVideo.post("/save-video",(req,res) => {
    const video = new modelVideo({
    name:req.body.name
    })

    video.save((err,document) => {
        if(err){
      return res.json({
          msg:"Video was not saved"
      })
        }else{
          return res.json({
              msg:`Video was saved${JSON.stringify(document)}`
          })
        }
    });
})


SaveVideo.get("/save-video",(req,res) => {
    res.send("Save-video GET")
})

module.exports = SaveVideo;