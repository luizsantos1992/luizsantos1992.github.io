var express = require('express'),
consign = require('consign'),
bodyParser = require('body-parser'),
expressValidator = require('express-validator'),
app = express();

app.set('view engine','ejs');
app.set('views', './system/views');
app.use(express.static('./system/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

consign()
    .include('system/routes')
    .then('system/models')
    .then('system/controllers')
    .into(app)

module.exports = app;

