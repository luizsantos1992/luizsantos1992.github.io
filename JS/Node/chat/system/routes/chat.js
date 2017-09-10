module.exports = function(app){
    app.post('/chat', function(req, res){
         app.system.controllers.chatController.iniciaChat(app, req, res);
    })

    app.get('/chat', function(req, res){
         app.system.controllers.chatController.iniciaChat(app, req, res);
    })
}