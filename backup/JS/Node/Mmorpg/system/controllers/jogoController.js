module.exports.jogo = function(app, req, res){
    if(!req.session.autorizado) {
         res.render('index', {validacao:''});
    } 

    var msg = '';
    if(req.query.msg != ''){
        msg = req.query.msg;
    }

    let connection = app.config.dbConnection;
    let jogoDAO = new app.system.models.jogoDao(connection);
    jogoDAO.iniciaJogo(res, req.session.usuario, req.session.casa, msg);
}

module.exports.sair = function(app, req, res){
    req.session.destroy( function(err, result){
        res.render('index', {validacao: ''})
    });
}

module.exports.suditos = function(app, req, res){
    if(!req.session.autorizado) {
         res.render('index', {validacao:''});
    } 
    res.render('aldeoes', {validacao: ''})
}

module.exports.pergaminhos = function(app, req, res){
    if(!req.session.autorizado) {
         res.render('index', {validacao:''});
    } 
    res.render('pergaminhos', {validacao: ''})
}

module.exports.ordenar_acao_sudito = function(app, req, res){
    var dadosForm = req.body;

    req.assert('acao', 'Ação deve ser informada').notEmpty();
    req.assert('quantidade', 'Quantidade deve ser informada').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.redirect('jogo?msg=A');
        return;
    }


    let connection = app.config.dbConnection;
    let jogoDAO = new app.system.models.jogoDao(connection);
    dadosForm.usuaro = req.session.usuario;
    jogoDAO.acao(dadosForm);

    res.redirect('jogo?msg=B')

}