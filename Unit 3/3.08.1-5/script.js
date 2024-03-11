// Examples
var examplesarr = []

// Substring()
var title ="I love this class";
var part = title.substring(2,6);
examplesarr.push(part)

//indexOf()
var word = "brighten";
var search = "right";
examplesarr.push(word.indexOf(search));

//lastIndexOf()
var word = "brighten";
var search = "right";
examplesarr.push(word.lastIndexOf(search));

//replace()
var word = "Microsoft";
var replacement = "HA";
examplesarr.push(word.replace("o", replacement));

//toLowerCase(), toUpperCase()
var word = "brighten";
examplesarr.push(word.toUpperCase());

//length()
var word = "Apple";
examplesarr.push(word.length);

//includes()
var word = "Google";
examplesarr.push(word.includes("Goog").toString());

//startsWith(), endsWith()
var word = "AMD";
examplesarr.push(word.startsWith("E").toString());

//charAt()
var word = "Intel";
examplesarr.push(word.charAt(1));

//charCodeAt()
var word = "NVidia";
examplesarr.push(word.charCodeAt(1));

//String.fromCharCode()
examplesarr.push(String.fromCharCode(115));

//String Comparisons
examplesarr.push("Apple" == "apple");

let i = 0;
let examplesResult = "";
while (examplesarr[i]) {
  examplesResult += examplesarr[i] + "<br>";
  i++;
}
document.getElementById("examplesOutput").innerHTML = examplesResult

// 2.
function wordchange() {
  var userWord= document.getElementById("f2input").value.toLowerCase();
  var firstLetter = userWordcharAt(0);
  if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {
    document.getElementById("f2output").innerHTML = userWordsubstring(1) + firstLetter; 
  } else {
    document.getElementById("f2output").innerHTML = userWord + "ly";
  }
} 

// 3. 
function stringInfo () {
  var userWord= document.getElementById("f3input1").value;
  var userSubstring = document.getElementById("f3input2").value;
  document.getElementById("f3output").innerHTML = "Characters in word " + userWordlength + "<br> First instance: " + userWordindexOf(userSubstring) + "<br> Last instance: " + userWordlastIndexOf(userSubstring);
}

// 4. 
function letterReplace () {
  var userWord= document.getElementById("f4input1").value;
  var userLetter = document.getElementById("f4input2").value;

  if (userWordincludes(userLetter)) {
    var randomLetter = String.fromCharCode(Math.floor(26 * Math.random() + 97));
    document.getElementById("f4output").innerHTML = userWordreplace(userLetter, randomLetter);
    } else {
    document.getElementById("f4output").innerHTML = "there is no" + userLetter;
  }
}

// 5. 
function alphabetical() {
  var userString1 = document.getElementById("f5input1").value;
  var userString2 = document.getElementById("f5input2").value;
  var userString3 = document.getElementById("f5input3").value;
  const stringList = [userString1, userString2, userString3];
  var sortedStrings = stringList.sort();
  document.getElementById("f5output").innerHTML = sortedStrings;
}