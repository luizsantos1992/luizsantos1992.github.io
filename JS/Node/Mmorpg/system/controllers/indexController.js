module.exports.index = function(app, req, res){
	res.render('index', {validacao:''});
}

module.exports.autenticar = function(app, req, res){

	var dadosForm = req.body;

	req.assert('usuario', 'Usuário deve ser informado').notEmpty();
	req.assert('senha', 'Senha deve ser informada').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("index", {validacao: erros});
	}


}