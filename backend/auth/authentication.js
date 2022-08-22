const jwt = require("jsonwebtoken");
const Patient = require("../models/patientModel");

const Admin = require("../models/adminModel");


module.exports.verifyPatient = function(req,res,next){
    try{
    const tokens = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(tokens, "anysecretkey");
    //console.log(data);
    Patient.findOne({_id : data.cusId})
    .then(function(result){
      //  console.log(result);
      req.patientInfo = result;
      next();
    })
    .catch(function(e){
        res.json({error : e})
    })


    }
    catch(e){
        res.json({error : "Invalid Access"})
    }



}



module.exports.verifyAdmin = function(req,res,next){
    try{
    const tokens = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(tokens, "anysecretkey");
    //console.log(data);
    Admin.findOne({_id : data.cusId})
    .then(function(result){
      //  console.log(result);
      req.adminInfo = result;
      next();
    })
    .catch(function(e){
        res.json({error : e})
    })


    }
    catch(e){
        res.json({error : "Invalid Access"})
    }



}




