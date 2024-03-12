// 1. 
function circleArea() {
  r = document.getElementById("f1input").value;
  document.getElementById("f1output").innerHTML = Math.round(100*Math.PI * r**2)/100;
}

// 2.
function randomword() {
  var w = Math.floor(4 * Math.random() + 1);
  var word = "";
  switch (w) {
    case 1: 
      word = "Computer";
      break;
    case 2: 
      word = "Phone";
      break;
    case 3: 
      word = "Laptop";
      break;
    case 4: 
      word = "TV";
      break;
  }
  document.getElementById("f2output").innerHTML = "Your random word is " + word;
}

// 3.
var question, answer;
function mathQuestion() {
  var n1, n2;
  n1 = Math.floor(20 * Math.random() + 1);
  n2 = Math.floor(20 * Math.random() + 1); 

  switch (Math.floor(4 * Math.random() + 1)) {
    case 1:
      question = n1 + " + " + n2;
      answer = n1 + n2;
      break;
    case 2:
      question = n1 + " - " + n2;
      answer = n1 - n2;
      break;
    case 3:
      question = n1 + " x " + n2;
      answer = n1 * n2;
      break;
    case 4:
      question = n1 + " / " + n2;
      answer = n1 / n2;
      break;
  }
  question +=  " = ";
  document.getElementById("f3output").innerHTML = question;
}

function checkAnswer() {
  var ans = document.getElementById("f3input").value;
  var out = question;
  if (ans == answer)
    out += ans + " ✔correct";
  else if (ans == "giveup")
    out += answer + " skill issue 💀";
  else 
    out += ans + " ✘incorrect";
  document.getElementById("f3output").innerHTML = out;
}

// 4.
function rectanglePerimeter () {
  var l = document.getElementById("f4input1").value;
  var w = document.getElementById("f4input2").value;
  document.getElementById("f4output1").innerHTML = 2*l + 2*w;
}

function circumference () {
  var r = document.getElementById("radius").value;
  document.getElementById("f4input2").innerHTML = Math.round(10*Math.PI*2*r)/100;
}

function distance () {
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;
  document.getElementById("distanceOut").innerHTML = Math.sqrt((x2-x1)**2 + (x2-x1)**2);
}

// 5.