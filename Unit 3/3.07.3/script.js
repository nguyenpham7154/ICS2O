var n1, n2, operator, ans, answer;

function randomQuestion () {
  n1 = Math.floor(20 * Math.random() + 1);
  n2 = Math.floor(20 * Math.random() + 1);
  operator = Math.floor(4 * Math.random() + 1);

  if(operator == 1) {
    ans = n1 + "+" + n2;
    answer = n1 + n2;
    } else if(operator == 2){ 
    ans = n1 + "-" + n2; 
    answer = n1 - n2;
    } else if(operator == 3){ 
    ans = n1 + "*" + n2; 
    answer = n1 * n2;
    } else { 
    ans = n1 + "/" + n2; 
    answer = n1 / n2;
  } 
  return ans;
}

document.write(randomQuestion())

// Array of possible operators
var operations = ["+", "-", "*", "/"];

// Functions to avoid Math.floor repeat
function randomNumber(min, max) {
  return Math.floor((max - min) * Math.random() + min);
}

// Math Operation that produces a "length" value equation
function mathOperation(length) {
  // This means that mathOperation has to choose input
  if(length === 1) {
    var value = randomNumber(1, 100);
    return [String(value), Number(value)];
  }

  // This part of this code runs if the length != 1
  // Calls back function until it creates a simple equation like a + b (Recursion)
  var leftSide = mathOperation(Math.floor(length / 2));
  var rightSide = mathOperation(Math.ceil(length / 2));

  // Value from the each side of the operation
  var leftValue = leftSide[1];
  var rightValue = rightSide[1];
  
  // Solves for that part of the equation
  var result, operator = operations[randomNumber(0,4)];
  
  if(operator == "+") result = leftValue + rightValue;
  else if(operator == "-") result = leftValue - rightValue;
  else if(operator == "*") result = leftValue * rightValue;
  else result = leftValue / rightValue;
  
  // Returns the part of the equation (Operation in string, Answer of side)
  return ["(" + leftSide[0] + " " + operator + " " + rightSide[0] + ")", result];
}

// Asking for users input :
alert("Hello User ! Do you want to test your math skills ?");

// Generate random equation
var level = prompt("Please enter a level between 1 and 9");
var expression = mathOperation(Number(level) + 1);
// eval() is a handy function that solves a string equation
var answer = expression[1];
var userAnswer = prompt("Try solving without a calculator : " + expression[0]);

if(userAnswer == answer) alert("Not bad ! Your answer is correct !");
else alert("Seems like you have made a mistake, the answer was " + answer);

// Printing out result
document.write("Question : " + expression[0] + " = ?");
document.write("<br>User Input : " + userAnswer);
document.write("<br>Answer : " + answer);