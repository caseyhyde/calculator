var equation = {
  num1: "",
  num2: "",
  operator: ""
};
var result;

$(document).ready(function() {
  console.log("This is working!");

  $('span').on('click', 'div', addToEquation)




  function addToEquation () {
    if (operatorChecker()) { //if no operator yet:
      switch ($(this).attr('class')) { //check clicked item...
        case "number": //if it's a number (this includes the decimal):
          if (decimalChecker(equation.num1) || $(this).attr('id') != "decimal") { //and there is not already a decimal, or you are not clicking on a deicimal:
            equation.num1 += $(this).text(); //concatenate the number(or decimal) clicked to the num1 string
            appendToDom(equation.num1); //replace text in input field with current num1 string
          }
          break;
        case "operator": //if an operator is clicked:
          equation.operator = $(this).attr('id'); //assign the operator to the equation operator property
          appendToDom(equation.num1 + equation.operator); //replace text in input field with num1 + operator
          break;
      }
    console.log(equation);
  } else if (!operatorChecker()) {
        switch ($(this).attr('class')) {
          case "number":
            if (decimalChecker(equation.num2) || $(this).attr('id') != "decimal") {
              equation.num2 += $(this).text();
              appendToDom(equation.num1 + equation.operator + equation.num2);
              console.log(equation);
            }
            break;
          case "equals":
            sendEquation();
            break;
        }
    }
  }

  function appendToDom(x) {
    $('#equationBox').val(x);
  }

  function decimalChecker(number) {
    if (number.includes(".") == false) {
      return true;
    }
  }

  function operatorChecker() {
    if (equation.operator == "") {
      return true;
    }
  }

  function numberChecker() {
    if (equation.num1 === "") {
      return true;
    }
  }

  function calculate() {

  }


  function sendEquation() {
    $.ajax({
      type: 'POST',
      url: '/math',
      data: equation,
      success: function() {
        console.log("Data sent!");
        router();
      }
    });
  }

  function router() {
    switch (equation.operator) {
      case "+":
        getAddAnswer();
        break;
      case "-":
        getSubctractAnswer();
        break;
      case "x":
        getMultiplyAnswer();
        break;
      case "/":
        getDivideAnswer();
        break;
    }
  }

  function getAddAnswer() {
    $.ajax({
      type: 'GET',
      url: '/math/add',
      success: function(results) {
        result = results;
        console.log('Data received! Result is: ' + result.answer);
        appendToDom(result.answer);
        equation.num1 = result.answer;
      }
    });
  }

  function getSubctractAnswer() {
    $.ajax({
      type: 'GET',
      url: '/math/subtract',
      success: function(results) {
        result = results;
        console.log('Data received! Result is: ' + result.answer);
        appendToDom(result.answer);
      }
    });
  }

  function getMultiplyAnswer() {
    $.ajax({
      type: 'GET',
      url: '/math/multiply',
      success: function(results) {
        result = results;
        console.log('Data received! Result is: ' + result.answer);
        appendToDom(result.answer)
      }
    });
  }

  function getDivideAnswer() {
    $.ajax({
      type: 'GET',
      url: '/math/divide',
      success: function(results) {
        result = results;
        console.log('Data received! Result is: ' + result.answer);
        appendToDom(result.answer);
      }
    });
  }



});
