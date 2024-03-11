var n1, n2, operator, ans, answer;
var score = 0;

function game () {
  n1 = Math.floor(15 * Math.random() + 1);
  n2 = Math.floor(15 * Math.random() + 1);
  operator = Math.floor(2 * Math.random() + 1);
  
  if(operator == 1) {
    ans = prompt (n1 + "+" + n2);
    answer = n1 + n2;
    } else { 
    ans = prompt (n1 + "-" + n2); 
    answer = n1 - n2;
    } 
  
  if(ans == answer) {
    document.write("Correct. The answer was: " + answer + "<br>");
    score++;
    } else { 
    document.write("Incorrect. The answer was: "+ answer + "<br>");  
  };
}

function repeat(func, times) {
  func();
  times && --times && repeat(func, times);
}

repeat(game, 3);
document.write("You got " + Math.floor(score/3*100) + "%")