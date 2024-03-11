const answers = [
  "Yes",
  "Most likely",
  "Probably",
  "Depends",
  "I don't know",
  "Can't be sure",
  "Probably not",
  "No",
];

// Random an index and display it //
function myFunction(){
  var list = answers;
  document.getElementById("response").innerHTML =  list[Math.floor(Math.random() * list.length)];
  document.getElementById("response").style.fontSize="18px";
  setTimeout(reset, 1500);

  // Reset the inputfield and 8ball //
  function reset(){
    document.getElementById("response").innerHTML=" ";
    }
}

