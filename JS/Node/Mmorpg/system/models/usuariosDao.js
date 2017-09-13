function usuariosDAO(connection){
    this._connection = connection();
}

usuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open(function(error, mongoClient){
        mongoClient.collection("usuarios", function(e, collection){
            collection.insert(usuario);

            mongoClient.close();
        })
    });
}

usuariosDAO.prototype.autenticar = function(usuario, req, res){
    this._connection.open(function(error, mongoClient){
        mongoClient.collection("usuarios", function(e, collection){
            //collection.find({usuario: {$eq: usuario.usuario}, senha: {$eq: usuario.senha}});
            collection.find(usuario).toArray(function(err, result){
                if(result[0] != undefined){
                    req.session.autorizado = true;
                    req.session.usuario = result[0].usuario;
                    req.session.casa = result[0].casa;
                }

                if(req.session.autorizado){
                    res.redirect("jogo");
                } else {
                    var erro = [{
                        msg: 'Usuário/Senha incorretos'
                    }];
                    res.render("index", {validacao: erro});
                }
            });

            mongoClient.close();
        })
    });
}

module.exports = function(){
    return usuariosDAO;
}