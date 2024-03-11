var score = prompt("Please enter your score: ");

if (score < 0 || score > 100 || isNaN(score)){
  alert("Invalid score")
} else if (score >= 80){
  grade = "level 4"
} else if (score >= 70){
  grade = "level 3"
} else if (score >= 60){
  grade = "level 2"
} else if (score >= 50){
  grade = "level 1"
} else {
  grade = "level R"
}

document.write("Your grade is a " + grade)