// 1. 
function forCounter() {
  var min = document.getElementById("f1input1").value;
  var max = document.getElementById("f1input2").value;
  var out1 = "", out2 = "", out3 = "";
  for (let i = min; i <= max; i++) {
    out1 += String(i) + " ";
    if (i % 2 == 0)
      out2 += String(i) + " ";
    out3 += String(max-i+1) + " ";
  }
  document.getElementById("f1output").innerHTML = out1 + "<br>" + out2 + "<br>" + out3 + "<br>";
}

// 2. 
function forSum() {
  var min = document.getElementById("f2input1").value;
  var max = document.getElementById("f2input2").value;
  var sum = 0;
  for (let i = min; i <= max; i++)
    sum += Number(i);
  document.getElementById("f2output").innerHTML = sum;
}

// 3.  WORDS
function forNumWords() {
  var str = document.getElementById("f3input").value.split(" ");
  document.getElementById("f3output").innerHTML = str.length;
}
