var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
var IP_MALVADA = '192.168.56.1';
app.use((Request,Response,next)=>{

    if(Request.ip===IP_MALVADA){
        Response.status(401).send("intento de acceso no autorizado");
    }else{
        next();
    }

});