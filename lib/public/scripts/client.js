var equation = {};
var clickCounter = 0;

$(document).ready(function() {
  console.log("This is working!");

  $('span').on('click', 'div', addToEquation)

  function addToEquation() {
    if (clickCounter == 0) {
      equation.num1 = $(this).attr('id');
      clickCounter ++;
      $('#equationBox').val(equation.num1);
    } else if (clickCounter == 1) {
      equation.operator = $(this).attr('id');
      $('#equationBox').val(equation.num1 + " " + equation.operator);
      clickCounter ++;
    } else if (clickCounter == 2) {
      equation.num2 = $(this).attr('id');
      $('#equationBox').val(equation.num1 + " " + equation.operator + " " + equation.num2);
      clickCounter ++;
      console.log(equation);
    } else if (clickCounter == 3) {
      sendToServer();
    }
  }

  function sendToServer() {
    $.ajax({
      type: 'POST',
      url: '/test',
      data: equation,
      success: function() {
        console.log("data sent!");
      }
    });
  }

  function validateInput() {

  }




});
