const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

//now the folder images is publicly accessible
app.use(express.static(__dirname + '/images')); // here images is my folder name

app.use(express.json());
app.use(express.urlencoded({extended : true}))


require("./database/db");
const patientRoute = require("./routes/patientRoute");
app.use(patientRoute);



require("./database/db");
const adminRoute = require("./routes/adminRoute");
app.use(adminRoute);

require("./database/db");
const appointmentRoute = require("./routes/appointmentRoute");
app.use(appointmentRoute);

app.listen("90");