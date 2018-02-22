module.exports = function(app){
	app.get('/jogo', function(req, res){
		app.system.controllers.jogoController.jogo(app, req, res);
	});

	app.get('/sair', function(req, res){
		app.system.controllers.jogoController.sair(app, req, res);
	});

	app.get('/suditos', function(req, res){
		app.system.controllers.jogoController.suditos(app, req, res);
	});

	app.get('/pergaminhos', function(req, res){
		app.system.controllers.jogoController.pergaminhos(app, req, res);
	});
	
	app.post('/ordenar_acao_sudito', function(req, res){
		app.system.controllers.jogoController.ordenar_acao_sudito(app, req, res);
	});
	
}