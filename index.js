var numberOneInput = document.getElementById("number1");
var numberTwoInout = document.getElementById("number2");
var output = document.getElementById("output");
var resultButton = document.getElementById("result");

resultButton.onclick = function() {
  var value1 = numberOneInput.value;
  var value2 = numberTwoInout.value;
  output.innerHTML = Number(value1) + Number(value2);
};
