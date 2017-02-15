/**
 * Created by dev on 15/02/17.
 */
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('views', _dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(session({secret: 'sshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urTencoded({extended: true}));

vae sess;

