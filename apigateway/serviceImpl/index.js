 function api() {
     var seneca = this;
 

 var senecaOrderManager = seneca.client({
     host: "192.168.99.103",
     port: 3000
   });
   var senecaProductManager = seneca.client({
     host: "192.168.99.102",
     port: 3000
   });



 seneca.add({area: "ui", action: "products"}, function(args,
       done) {
       senecaProductManager.act({area: "product", action: "fetch"},
         function(err, result) {
         done(err, result);
            }); });


seneca.add({area: "ui", action: "createproducts"}, function(args,
       done) {
       senecaProductManager.act({area: "product", action: "add", name:args.name1, description:args.description1, category:args.category, price:args.price        },
         function(err, result) {
         done(err, result);
            }); });


 seneca.add({area: "ui", action: "productsbyid"}, function(args,
       done) {
 
       senecaProductManager.act({area: "product", action: "fetch",
         criteria: "byId", id: args.id1}, function(err, result) {
         done(err, result);
}); });


 seneca.add({area: "ui", action: "productsbycategory"}, function(args,
       done) {
 
       senecaProductManager.act({area: "product", action: "fetch",
         criteria: "byCategory", category: args.category}, function(err, result) {
         done(err, result);
}); });

 seneca.add({area: "ui", action: "productsremovebyid"}, function(args,
       done) {
  
       senecaProductManager.act({area: "product", action: "remove",
         id: args.id1}, function(err, result) {
         done(err, result);
}); });

seneca.add({area: "ui", action: "productseditbyid"}, function(args,
       done) {
       senecaProductManager.act({area: "product", action: "edit", name:args.name1, description:args.description1, category:args.category, price:args.price ,id:args.id1       },
         function(err, result) {
         done(err, result);
            }); });


seneca.add({area: "ui", action: "orders"}, function(args,
       done) {
       senecaOrderManager.act({area: "orders", action: "fetch"},
         function(err, result) {
         done(err, result);
            }); });



seneca.add({area: "ui", action: "createorders"}, function(args,
       done) {
       senecaOrderManager.act({area: "orders", action: "add", customername:args.customername, total:args.total, customeremail:args.customeremail       },
         function(err, result) {
         done(err, result);
            }); });


seneca.add({area: "ui", action: "ordersremovebyid"}, function(args,
       done) {
  
       senecaOrderManager.act({area: "orders", action: "remove",
         id: args.id1}, function(err, result) {
         done(err, result);
}); });







seneca.add("init:api", function(msg, respond){
    seneca.act('role:web',{ use: {
      prefix: '/api',
      pin:  'area:ui,action:*',
      map: {
         products:{GET:true},
         createproducts:{POST:true},
         productsbyid:{GET:true, suffix:'/:id1'},
         productsbycategory:{GET:true, suffix:'/:category'},
         productsremovebyid:{GET:true, suffix:'/:id1'},
         productseditbyid:{POST:true},
        orders:{GET:true},
         createorders:{POST:true},
        ordersremovebyid:{GET:true, suffix:'/:id1'},
   
      }
    }}, respond)
}); 

}

module.exports = api;
