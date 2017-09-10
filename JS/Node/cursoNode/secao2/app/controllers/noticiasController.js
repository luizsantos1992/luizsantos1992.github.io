module.exports.noticias = function(app, req, res){
    var connection = app.config.dbConnection();

    var noticiasDAO = new app.app.models.noticiasDAO(connection);

    noticiasDAO.getNoticias(function(err, result){
        res.render("noticias/noticias", {noticias: result});
    });
}

module.exports.noticia = function(app, req, res){

    var connection = app.config.dbConnection();

    var noticiasDAO = new app.app.models.noticiasDAO(connection);

    noticiasDAO.getNoticia(req.params.id, function(err, result){
        res.render("noticias/noticias", {noticias: result});
    });

}