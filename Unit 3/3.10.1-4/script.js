// 1.
function passwordCheck() {
  var password = "";
  for (let i = 0; i < 8; i++) {
    password += Math.floor(Math.random() * 10);
  }

  alert("Password: " + password);
  while (password !== guess) {
    var guess = prompt("Enter password");
    if (password == guess) {
      alert("Access Granted");
      document.getElementById("f1output").innerHTML = ('<img src="classified.jpg" style="width: 100%;"></img>');
    }
    else if (guess == "giveup") break;
    else alert("Access Denied");
  }
}

// 2.
function countLetters() {
  var str = document.getElementById("f2input").value;
  var i = 0, lettercount = 0;
  while (i < str.length) {
    var c = str.toLowerCase().charCodeAt(i)
    if (c >= 97 && c <= 122) {
      lettercount++;
    }
    i++;
  }
  document.getElementById("f2output").innerHTML = "Sentence has " + lettercount + " letters"
}

// 3.
function h4ck3rsp34k() {
  var input = document.getElementById("f3input").value;
  var output = "", i = 0;
  
  while (i < input.length) {
    switch (input[i]) {
      case "a":
        output += "4";
        break;
      case "e":
        output += "3";
        break;
      case "i":
        output += "1";
        break;
      case "o":
        output += "0";
        break;
      default:
        output += input[i];
        break;
    }
    i++;
  }
  document.getElementById("f3output").innerHTML = output;
}

// 4.
function translatePigLatin() {
  var str = document.getElementById("f4input").value.split(" ");
  var output = "", i = 0;
  
  while (i < str.length) {
    var c = str[i][0];
    if (c == "a" || c == "i" || c == "e" || c == "o" || c == "u") {
      output += str[i] + "ay ";
    }
    else {
      output += str[i].substring(1) + c + "ay "
    }
    i++;
  }

  document.getElementById("f4output").innerHTML = output;
}