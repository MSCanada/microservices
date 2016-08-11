var plugin=function(options){

	var seneca=this;
	//fetch all products in list

	seneca.add({area:"orders",action:"fetch"},function(args,done){
		var orders=this.make("orders");
		orders.list$({},done);

	})

	//adds a product
	seneca.add({area:"orders", action:"add"},function(args,done){
		var orders=this.make("orders");
		orders.total = args.total;
       orders.customer_email = args.customeremail;
       orders.customer_name = args.customername;
       orders.save$(function(err,order){
       	done(err,orders.data$(false));
       })

	})





seneca.add({area:"orders",action:"remove"},function(args,done){
		var orders=this.make("orders");
		orders.remove$(args.id,function(err){
			done(err,null);

		});

	})














}

module.exports=plugin;