const express = require("express");
const Appointment = require("../models/appointmentModel");
const auth =require("../auth/authentication");
const router = new express.Router();
const upload = require("../uploads/uploads");
const { response } = require("express");
const Patient = require("../models/patientModel");





//route for appointment registration

router.post("/appointment/insert", auth.verifyPatient, upload.single('profile_pic'),function(req, res){

    console.log(req.file)
        // now it means we are ready for add appointment
        const id= req.patientInfo._id;
        const fullname = req.body.fullname;
        const email = req.body.email;
        const address = req.body.address;
        const phone = req.body.phone;
        const gender = req.body.gender;
        const date = req.body.date;
        const pimage = req.file.filename;
        const problem = req.body.problem;
        
        const adata = new Appointment({
            user : req.patientInfo._id, 
            fullname : fullname,
            email : email,
            address : address,
            phone : phone,
            gender : gender,
            date : date,
            pimage : pimage, 
            problem : problem,
            
            // id : id
                
            });
            adata.save()
            .then(function(){
                res.json({message: "Insert Success!"})

            })
            .catch(function(e){
                res.json({msg : "something went wrong!!"})

            })

        })

        //to show single product

        router.get("/appointment/single/:vid", auth.verifyAdmin, function(req,res){

            const vid = req.params.vid;

            Appointment.findOne({_id: vid})

            .then(function(result){
              res.json(result)

            })
            .catch(function(){
               res.json({msg : "something went wrong"})

            })
        })

        //to show  appointment by patient
        
        
        router.get("/appointment/myappoint", auth.verifyPatient, function(req,res){
            Appointment.find({user:req.patientInfo._id})
            .then(function(result){
                res.json(result)
            })
            .catch(function(){
                res.json({msg : "something went wrong"})
            })

        })


        
 





        //to update patient information
        router.put("/appointment/update",auth.verifyPatient,function(req,res){
            //console.log(req.patientInfo);
            const id = req.body.vid;
            const fullname = req.body.fullname;
            const email = req.body.email;
            const address = req.body.address;
            const phone = req.body.phone;
            const gender = req.body.gender;
            const date = req.body.date;
            const problem = req.body.problem;
            const pimage = req.body.pimage
            console.log(fullname)
            Appointment.findByIdAndUpdate(id, {fullname:fullname, email:email, address:address, phone:phone, gender:gender, date:date, problem:problem, pimage:pimage},function(err,docs){
                if (!err){
                    res.json({msg: "update successfully!" , success: true })
                }
                else{
                    res.json({msg: err , success: true })
                }
                
            })
            
        
        })






         // to delete appointment.......
         router.delete('/appointment/delete/:vid', auth.verifyAdmin, function (req, res) {
            Patient.findByIdAndRemove(req.params.vid).then(function () {
                res.json({ msg: 'deleted succesfully' })
            }).catch(function () {
                res.json({ msg: "Try Again" })
            })
        })
    

        router.get("/appointment/details", function (req, res) {
            const fullname= req.body.fullname

            const address= req.body.address
            const phone= req.body.phone
            const email= req.body.email
            const problem = req.body.problem

            //make userid in product model 
        
            Appointment.find(fullname,address,phone,email,problem)
              .then(function (result) {
                res.json(result);
                console.log(result);
              })
          
              .catch(function () {
                res.json({ msg: "something went wrong" });
              });
          });
        







        

           


        

        




module.exports = router;