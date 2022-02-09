'use strict'
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const express_layouts = require('express-ejs-layouts');
const body_parser = require('body-parser');
const app_route = require('./src/routes/app_route');

const app = express();
app.use(helmet());
app.use(compression());

//view engine
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

//layouts
app.use(express_layouts);
app.use(body_parser.json());

//route
app.use("/", app_route.routes);

//static
app.use("/styles", express.static(path.join(__dirname + "/src/assets/bootstrap")));
app.use("/icon", express.static(path.join(__dirname + "/src/assets/bootstrap-icons")));
app.use("/ressources", express.static(path.join(__dirname + "/src/assets/ressources")));

//server
app.listen(3300, ()=>{
    console.log("");
    console.log(" ====================================================");
    console.log(" ADMIN SAKUMU (Sistem Aplikasi Keuangan Muhammadiyah)");
    console.log(" ====================================================");
    console.log("");
    console.log(" Powered by PT BPRS Mitra Mentari Sejahtera");
    console.log("");
    console.log(" url : http://localhost:3300");
    console.log("");
    console.log(" app version 1.0");
    console.log(" _________________________________");
    console.log("");
});

module.exports={app};