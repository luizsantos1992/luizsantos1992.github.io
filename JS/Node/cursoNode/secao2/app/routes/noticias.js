module.exports = function(app) {
    app.get('/noticias', function(req, res){
        app.app.controllers.noticiasController.noticias(app, req, res);
    })

    app.get('/noticia/:id', function(req, res){
        app.app.controllers.noticiasController.noticia(app, req, res);
    })
}