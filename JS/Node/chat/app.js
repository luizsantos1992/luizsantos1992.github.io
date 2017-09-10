var app = require('./config/server.js');

var server = app.listen(80, function(){
    console.log("Servidor Online");
})

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){

    socket.on('disconnect', function(){
        
    })

    socket.on('msgParaServidor', function(data){
        socket.emit('msgParaCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem
        })

        socket.broadcast.emit('msgParaCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem
        })

        if(parseInt(data.apelido_atualizado) == 0) {
            socket.emit('participantesParaCliente', {
                apelido: data.apelido
            })

            socket.broadcast.emit('participantesParaCliente', {
                apelido: data.apelido
            })
        }
    })

})