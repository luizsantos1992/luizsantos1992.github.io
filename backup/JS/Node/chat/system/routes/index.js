module.exports = function(app){
    app.get('/', function(req, res){
        app.system.controllers.indexController.index(app, req, res);
    })
}