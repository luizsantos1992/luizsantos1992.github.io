module.exports.formulario_inclusao_noticia = function(app, req, res){

    res.render("admin/form_add_noticia",  {validacao :{}, noticia:{}});

}

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body;

    req.check('titulo','Título é obrigatório').notEmpty();
    req.check('noticia','Notícia é obrigatória').notEmpty();
    req.check('resumo','Resumo é obrigatório').notEmpty();
    req.check('resumo','Resumo deve conter entre 10 e 100').len(10,100);
    req.check('autor','Autor é obrigatório').notEmpty();
    req.check('autor','Autor deve conter entre 10 e 30').len(10,30);
    req.check('data_noticia','Data é obrigatória').notEmpty();

    req.getValidationResult()
    .then((result) => {
        if(result.array().length > 0){
            res.render("admin/form_add_noticia", {validacao : result.array(), noticia: noticia});
            return;
        } else {
        var connection = app.config.dbConnection();

        var noticiasDAO = new app.app.models.noticiasDAO(connection);

        noticiasDAO.salvarNoticia(noticia, function(err, result){
            res.redirect("/noticias");
        });
        }
    });
}