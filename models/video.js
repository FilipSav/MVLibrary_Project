const mongoose = require("mongoose");
const video = new mongoose.Schema({
    title:{
        type:String
    },
    artist:{
        type:String
    },
    album:{
        type:String
    },
    year:{
        type:Number
    },
    description:{
        type:String
    },
    link:{
        type:String
    }
});
module.exports =mongoose.model("Videos",video);