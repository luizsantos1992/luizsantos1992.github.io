module.exports.cadastro = function(app, req, res){
    res.render('cadastro',{validacao: '', dadosForm: {}});
}

module.exports.cadastrar = function(app, req, res){
    
    var dadosForm = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuario não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
        return;
    }  


    let connection = app.config.dbConnection;


    let usuariosDAO = new app.system.models.usuariosDao(connection);
    usuariosDAO.inserirUsuario(dadosForm);

    res.send('Usuário criado com sucesso');
    
}