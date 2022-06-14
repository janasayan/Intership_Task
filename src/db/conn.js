/*
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/new-students-api", {
    //useCreateIndex: true,
    useNewURlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connection is successful");
}).catch((e) =>{
    console.log(e);
})

*/

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/video-Details", {
    //useCreateIndex: true,
    useNewURlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connection is successful");
}).catch((e) =>{
    console.log(e);
})
