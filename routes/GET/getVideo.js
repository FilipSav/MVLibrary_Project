const { get } = require("mongoose");

const getVideo = require("express").Router();
getVideo.get("/get-video",(req,res) => {
    res.json({
        msg:"List of videos",
        listOfVideos:[
            {video:"first"},
            {video:"second"},
            {video:"third"}
        ]
    })
})

module.exports = getVideo;