module.exports = function(app){
	var products = app.controllers.products;

	app.get('/getProducts/:page', products.getProducts);	
	app.get('/getProductsBySkuPartner/:sku', products.getProductBySkuPartner);
	app.get('/GetOrderStatus/:orderId', products.GetOrderStatus);

};