var serviceImple=require("./serviceImpl")
var seneca=require("seneca")();
var mongostore=require("seneca-mongo-store");
var senecaentity=require("seneca-entity");


seneca.use(senecaentity);
seneca.use(serviceImple);
seneca.use(mongostore, {
     name: "seneca",
     host: process.env.MONGO_PORT_27017_TCP_ADDR,
     port: process.env.MONGO_PORT_27017_TCP_PORT
   });
seneca.listen(3000)








