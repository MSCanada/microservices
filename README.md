Development of ecommerce strategic tool for banking products involving Microservices based architecture. Had an API gateway point for co-ordinating with other Micro Services. Packaged whole architecture in Cluster based environment with the help of Docker.
Three different Hosts setup using Consul Registry as Service Discovery running on one of the hosts.
APIGATEWAY: http://192.168.99.101/api/
Endpoints which triggers microservice of ProductManagement http://192.168.99.102: 
/products   
/createproducts
/productsbyid
/productsbycategory
/productsremovebyid
/productseditbyid

Endpoints which triggers microservice of OrderManagement http://192.168.99.103:
/orders
/createorders
/ordersremovebyid 

Tools:: NodeJS,Seneca Nodejs Microservice Framework, Mongo DB, Docker, Shell Scripting
