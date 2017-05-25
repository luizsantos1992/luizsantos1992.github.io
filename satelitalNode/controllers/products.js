module.exports = function(app){
	var soap = require('soap');
	let url = 'http://www.satelital.com.br/integration/IntegrationService.v4.svc?wsdl';
	let applicationId = 'CD00C627-2E86-464A-8A66-C9EFADB81F04';
	let campaignId = 'ICONS';

var productsController = {
getProducts : function(req,res){
	var url = 'http://www.satelital.com.br/integration/IntegrationService.v4.svc?wsdl';
	var args = {applicationId: applicationId,campaignId: campaignId, page: req.params.page};
	soap.createClient(url, function(err, client) {
	client.GetProducts(args, function(err, result) {
	res.json(result.GetProductsResult);
	});
	});
},
getProductBySkuPartner : function(req,res){
	var url = 'http://www.satelital.com.br/integration/IntegrationService.v4.svc?wsdl';
	var args = {applicationId: applicationId,campaignId: campaignId, skuPartner: req.params.sku};
	soap.createClient(url, function(err, client) {
	client.GetProductBySkuPartner(args, function(err, result) {
	res.json(result);
	});
	});
},
GetOrderStatus : function(req,res){
	var url = 'http://www.satelital.com.br/integration/IntegrationService.v4.svc?wsdl';
	var args = {applicationId: applicationId,campaignId: campaignId, orderId: req.params.orderId};
	soap.createClient(url, function(err, client) {
	client.GetOrderStatus(args, function(err, result) {
	res.json(result.GetOrderStatusResult);
	});
	});
},
}

return productsController;
}