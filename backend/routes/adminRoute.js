const express = require("express");
const bcryptjs =  require("bcryptjs");
const jwt =  require("jsonwebtoken");
const Admin = require("../models/adminModel");
const auth =require("../auth/authentication");
const Appointment = require("../models/appointmentModel");
const router = new express.Router();




//route for admin registration

router.post("/admin/register", function(req, res){
    const username = req.body.username;
    Admin.findOne({username :"username"}).then(function(adminData){
        //if the username is in the database
        if(adminData!=null){
            res.json({message : "Username already exists!"})
            return;
        }

        // now it means we are ready for registration
        const password = req.body.password;
        bcryptjs.hash("hospital", 10 , function(e, hased_pw){
            const adata = new Admin({
                username : username,
                password : hased_pw,
                
            })
            adata.save()
            .then(function(){
                res.json({message: "Registered Success!"})

            })
            .catch(function(e){

            })

        })

    })

})

//login route = for admin

router.post("/admin/login",function(req,res){
    const username = req.body.username;

    //select * from patient where username = "admin"
    Admin.findOne({username : username})
    .then(function(adminData){

        // console.log(patientData);
        if (adminData === null){
            return res.json({message : "invalid"})

        }

        //need to check password

        const password = req.body.password;
        bcryptjs.compare(password,adminData.password, function(e, result){
            //true - correct pw, false = incorrect pw
            if (result===false){
                return res.json({message: "inavalid"})
            }

            //ticket generate - jsonwebtoken

            const token = jwt.sign({cusId : adminData._id}, "anysecretkey");
            res.json({token: token, message: "success"});




        })

        router.put('/appointment/update/', auth.verifyAdmin,function(req, res){
            const id_of_appointment = req.body.idbypatient;
            Appointment.updateOne({_id:id_of_appointment},{verify:true})
            . then().catch();
            
        })

        

    })
})



module.exports = router;