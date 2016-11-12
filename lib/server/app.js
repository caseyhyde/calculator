var PORT = 3000;
var express = require('express');
var app = express();
var index = require('./routes/index');
var calculator = require('./modules/calculator');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', index);



app.use(express.static('lib/public'));


app.post('/test', function(req, res) {
  console.log(req.body);
  res.sendStatus(200);
});


app.listen(3000);
console.log("listening on port: 3000");
