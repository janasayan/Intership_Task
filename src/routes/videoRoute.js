require('dotenv').config()

const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

const Videotracking = require("../models/videoTracking");

router.post("/add", (req, res) => {
    const token = req.header('authorization');

    const decoded = jwt.decode(token);
    
    let statusCode;

    let success_data =  {
        status_code:200,
        message:"success",
        data:{}
    }

    let fail_data =  {
        status_code:401,
        message:"failed",
        data:{}
    }
    
    if(decoded != null){
        const iat = decoded.iat
        const exp = decoded.exp

        const iDate = new Date(iat * 1000);
        const eDate = new Date(exp * 1000);
        const curr = new Date();

        if(iDate<curr && curr<eDate){
            statusCode = 200;
        }
        else{
            statusCode = 401;
        }

        const user_master_id = decoded.userdetail.user_master_id;

        console.log(req.body);
        let user = new Videotracking(req.body);
    
        //const obj = JSON.parse(user);
        user.user_master_id = user_master_id;
        user.added_on = Math.floor(curr.getTime() / 1000);
    
        if(statusCode == 200){
            user.save().then((e) => {
                res.status(statusCode).send(success_data);
            }).catch((e) =>{
                fail_data.message = "Error"
                statusCode = 203
                temp_data.status_code = statusCode
                res.status(statusCode).send(fail_data);
            })
        }

        //else condition
        else{
            res.status(statusCode).send(fail_data)
        }
    }

    else{
        res.status(401).send(fail_data);
    }
    
})

module.exports = router;