const { builtinModules } = require("module");

const mongoose = require("mongoose");



const Appointment = mongoose.model('Appointment',{

    fullname : {

        type : String
    },

    email : {

        type : String
    },

    address : {

        type : String
    },

    phone : {

        type : Number
    },

    gender : {

        type : String
    },

    date  : {
        type : String
    },

    pimage : {
        type : String

    },

    problem  : {
        type : String
    },

    verify :{
        type: Boolean,
        default: false
    },

    user: {type:mongoose.Schema.Types.ObjectId, ref: 'Patient'}



})

    







module.exports = Appointment