module.exports = function(app){
	app.get('/', function(req, res){
		app.system.controllers.indexController.index(app, req, res);
	});

	app.post('/autenticar', function(req, res){
		app.system.controllers.indexController.autenticar(app, req, res);
	})
}