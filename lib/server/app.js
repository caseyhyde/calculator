var PORT = 3000;
var express = require('express');
var app = express();
var index = require('./routes/index');
var bodyParser = require('body-parser');
var calculator = require('./modules/calculator')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', index);
app.set('port', process.env.PORT || 3000);

app.use('/math', calculator);


app.use(express.static('lib/public'));




app.listen(app.get('port'), function() {
  console.log('server is listening on port ' + app.get('port'));
});
