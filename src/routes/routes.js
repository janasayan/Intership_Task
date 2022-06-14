require('dotenv').config()

const express = require('express')
const router = express.Router();
const Student = require("../models/students");
/*
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
    
    const username = req.body.name
    const user = {name: username}
    
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
    res.json({accessToken: accessToken})
})
*/
/*
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null)
        return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if(err)
            return res.sendStatus(403)
        req.user = user
        next()
    })
}
*/

router.post("/addstudents", (req,res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then((e) => {
        let temp_data =  {
            status_code:200,
            message:"success",
            data:JSON.stringify(user)
        }
        res.status(201).send(temp_data);
    }).catch((e) =>{
        res.status(400).send(e);
    })
    
})

router.get('/students', async(req, res, next) => {
    
    try{
        const student = await Student.find({});
        res.json({
            success: true,
            total: student.length,
            students: student
        })
    } catch(err){
        next(err);
    }
})

router.get('/students/:add', async(req, res, next) =>{
    try{
        let student = await Student.find({address:req.params.add});

        if(!student){
            return res.json({
                success: false,
                message: "Students ID doesn't exist"
            })
        } else{
            res.json({
                success: true,
                message: "Student found",
                student: student
            })
        };
    } catch(err){
        next(err);
    }
})

module.exports = router;