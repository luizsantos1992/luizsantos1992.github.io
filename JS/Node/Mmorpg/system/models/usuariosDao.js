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

module.exports = function(){
    return usuariosDAO;
}