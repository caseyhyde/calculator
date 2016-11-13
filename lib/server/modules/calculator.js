var express = require('express');
var router = express.Router();
var equation = {};
var result = {};

router.post('/', function(req, res) {
  equation = req.body;
  res.sendStatus(200);
  console.log(req.body);
});

router.get('/add', function(req, res) {
  result.answer = parseFloat(equation.num1) + parseFloat(equation.num2);
  res.send(result);
});
router.get('/subtract', function(req, res) {
  result.answer = parseFloat(equation.num1) - parseFloat(equation.num2);
  res.send(result);
});
router.get('/multiply', function(req, res) {
  result.answer = parseFloat(equation.num1) * parseFloat(equation.num2);
  res.send(result);
});
router.get('/divide', function(req, res) {
  result.answer = parseFloat(equation.num1) / parseFloat(equation.num2);
  res.send(result);
});







module.exports = router;
