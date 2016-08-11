
var serviceImple=require("./serviceImpl");
var express = require("express");
var bodyParser = require('body-parser');
var seneca = require("seneca")();
var senecaentity=require("seneca-entity");

seneca.use(senecaentity);


seneca.use(serviceImple);






var app = require("express")();
app.use( require("body-parser").json());
app.use(seneca.export("web"));
app.listen(8085);







