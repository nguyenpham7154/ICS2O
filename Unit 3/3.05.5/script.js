
var score = 0

function game () {
  var number = Math.floor(Math.random() * 10) + 1;
  var userGuess1 = prompt("Guess a number between 1 and 10, you have 3 guesses");
  
  if (userGuess1 == number) {
    alert("You got it!")
    document.write("You got it correct in your first try, you got 100 points <br>");
    score += 100;
  } else if (userGuess1 < number) {
      alert("The number is higher");
    } else {
      alert("The number is lower");
    }
  
    var userGuess2 = prompt("You have 2 guesses left");
    if (userGuess2 == number) {
      alert("You got it!")
      document.write("You got it correct in your second try, you get 50 points <br>");
      score += 50
    } else if (userGuess2 < number) {
        alert("The number is higher");
      } else {
        alert("The number is lower");
      }
  
      var userGuess3 = prompt("You have 1 guess left");
      if (userGuess3 == number) {
        alert("You got it!")
        document.write("You got it correct in your third try, you get 25 points <br>");
        score += 25
      } else {
        alert("Out of guesses, let's try again")
        document.write("The number was " + number + "<br>");
      }
}

function scorecheck () {
  document.write("<br> Your score is " + score + "<br>")
  if (score >= 300) {
    document.write("You won gold");
    document.write("<img src='prizes/gold.jpg'>")
  } else if (score >= 150) {
    document.write("You won silver");
    document.write("<br><img src='prizes/silver.jpg'>")
  } else if (score >= 100) {
    document.write("You won bronze");
    document.write("<br><img src='prizes/bronze.jpg'>")
  } else {
    document.write("Good game")
  }
}

function repeat(func, times) {
  func();
  times && --times && repeat(func, times);
  if (times == 0){
    scorecheck()
  }
}

repeat(game, 3);



