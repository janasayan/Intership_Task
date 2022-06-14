/*
            Student api
const express = require('express');
require("./src/db/conn");
const Student = require("./src/models/students");
const port = process.env.PORT || 3000;
const app = express();
//commit test
app.use(express.json());

app.use('/api', require('./src/routes/routes.js'));

app.get('/', (req,res) => {
    res.send("Hello")
})

//  app.post("/students", (req,res) => {
//    console.log(req.body);
//    const user = new Student(req.body);
//    user.save().then((e) => {
//        let temp_data =  {
//            status_code:200,
//            message:"success",
//            data:JSON.stringify(user)
//        }
//        res.status(201).send(temp_data);
//      }).catch((e) =>{
//          res.status(400).send(e);
//    })
//    
//  })


app.listen(port, () => {
    console.log(`connected to port ${port}`);
})

*/


//ANALYTICS API
const express = require('express');
require("./src/db/conn");
//const analytics = require("./src/models/analytics");
//const VideoTracking = require("./src/models/videoTracking");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json())

app.use('/api', require('./src/routes/videoRoute.js'));

app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`connected to port ${port}`);
})