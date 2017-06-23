var express = require('express'),
load = require('express-load'),
bodyParser = require('body-parser'),
app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

load('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.get('/', function(req, res) {
	var soap = require('soap');
	  var url = 'http://uat.satelital.com.br:8080/integrationservice/IntegrationService.v4.svc?singleWsdl';
	  var args = {applicationId: '9DA1394C-6331-4071-AECC-37B3ADBA70FF',campaignId: 'BRAFI', page: '1'};
	  soap.createClient(url, function(err, client) {
	      client.GetProducts(args, function(err, result) {
	      		console.log(result.GetProductsResult);
	          res.json(result.GetProductsResult);
	      });
  });
	});

app.listen(80, function(){
	console.log("Ntalk no ar.");
})	


