const mongoose = require("mongoose");
const video = new mongoose.Schema({
    name:{
        type:String,
    }
});
module.exports =mongoose.model("Videos",video);