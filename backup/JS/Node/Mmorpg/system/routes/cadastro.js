module.exports = function(app){
	app.get('/cadastro', function(req, res){
		app.system.controllers.cadastroController.cadastro(app, req, res);
	});

	app.post('/cadastrar', function(req, res){
		app.system.controllers.cadastroController.cadastrar(app, req, res);
	});
}