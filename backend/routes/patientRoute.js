const express = require("express");
const bcryptjs =  require("bcryptjs");
const jwt =  require("jsonwebtoken");
const Patient = require("../models/patientModel");
const { route } = require("express/lib/application");
const auth =require("../auth/authentication");
const router = new express.Router();
const upload = require("../uploads/uploads");





//route for Patient registration

router.post("/patient/register",  function(req, res){
    const username = req.body.username;
    Patient.findOne({username :"username"}).then(function(patientData){
        //if the username is in the database
        if(patientData!=null){
            res.json({message : "Username already exists!"})
            return;
        }

        // now it means we are ready for registration
        const password = req.body.password;
        
        bcryptjs.hash(password, 10 , function(e, hased_pw){
            const address = req.body.address;
            const phone = req.body.phone;
            const email = req.body.email;
            const pdata = new Patient({
                username : username,
                password : hased_pw,
                phone : phone,
                address : address,
                email : email
            })
            pdata.save()
            .then(function(){
                res.json({message: "Registered Success!", success: true})

            })
            .catch(function(e){

            })

        })

    })

})


//login route = for patient

router.post("/patient/login",function(req,res){
    const username = req.body.username;

    //select * from patient where username = "admin"
    Patient.findOne({username : username})
    .then(function(patientData){

        // console.log(patientData);
        if (patientData === null){
            return res.json({message : "invalid"})

        }

        //need to check password

        const password = req.body.password;
        bcryptjs.compare(password,patientData.password, function(e, result){
            //true - correct pw, false = incorrect pw
            if (result===false){
                return res.json({message: "inavalid"});
            }

            //ticket generate - jsonwebtoken

            const token = jwt.sign({cusId : patientData._id}, "anysecretkey");
            res.json({token: token, message: "success", 'username': req.body.username});

        })


        

    })
})

//patient profile update

router.put("/patient/profile/update",auth.verifyPatient,function(req,res){
    //console.log(req.patientInfo);
    const id = req.patientInfo._id;
    const phone = req.body.phone;
    const address = req.body.address;
    Patient.updateOne({_id:id}, {phone: phone, address: address})
    .then(function(){
        res.json({msg: "update successfully!"})
    })
    .catch(function(){
        res.json({msg : "Try again!!"})
    })

})


router.get("/patient/details", function (req, res) {
    const username= req.body.username
    const address= req.body.address
    const phone= req.body.phone
    const email= req.body.email
    //make userid in product model 

    Patient.find(username,address,phone,email)
      .then(function (result) {
        res.json(result);
        console.log(result);
      })
  
      .catch(function () {
        res.json({ msg: "something went wrong" });
      });
  });




//patient delete by patient themselves
router.delete("/patient/profile/delete",auth.verifyPatient, function(req,res){
    const id = req.patientInfo._id;
    Patient.findOneAndDelete(id)
    .then(function(){
        res.json({msg: "Deleted!"})
    })
    .catch(function(){
        res.json({msg : "Try again!!"})
    })
    

})

// patient delete by admin
router.delete("/patient/delete",auth.verifyAdmin, function(req,res){
   // const id = req.adminInfo._id;
    const cid = req.body.id;
    Patient.deleteOne({_id : cid})
    .then(function(){
        res.json({msg: "Deleted!"})
    })
    .catch(function(){
        res.json({msg : "Try again!!"})
    })


})


router.post("/photo/upload", upload.single('abcd'), function(req,res){
if (req.file == undefined){
    return res.json({
        message : "Invalid file format. Only Jpeg and png allowed",
    })
}
//code after success
 

})







module.exports = router;