var PORT = 3000;
var express = require('express');
var app = express();
var index = require('./routes/index');
var bodyParser = require('body-parser');
var calculator = require('./modules/calculator')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', index);

app.use('/math', calculator);


app.use(express.static('lib/public'));




app.listen(3000);
console.log("listening on port: 3000");
