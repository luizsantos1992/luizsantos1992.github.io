var express = require('express'),
consign = require('consign'),
bodyParser = require('body-parser'),
expressValidor = require('express-validator'),
app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidor());

consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app;