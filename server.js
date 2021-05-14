const express = require("express");
const { get } = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require ("./databaze/connect");
const getVideos = require("./routes/GET/getVideo")
const SaveVideo = require("./routes/POST/saveVideo")
db.connect();

/*
Middleware 
Přijímá to JSON
*/ 
app.use(express.json({extended:false}));
/*
příjímáni ostatních např xml atd
*/
app.use(express.text({extended:false}));

/*
Routy - GET
*/
app.use("/",getVideos);
/*
Routy - POST
*/ 
app.use("/",SaveVideo);

app.get("/",(request,response) => {
    response.send("Jsi na hlavní stránce")
})

app.listen(PORT,(err) => {
    console.log(`Server běží na ${PORT}`)
})