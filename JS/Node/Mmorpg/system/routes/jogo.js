module.exports = function(app){
	app.get('/jogo', function(req, res){
		app.system.controllers.jogoController.jogo(app, req, res);
	});
}