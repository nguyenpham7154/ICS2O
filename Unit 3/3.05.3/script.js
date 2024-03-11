var birthdate = prompt ("enter your birthdate in DD/MM/YYYY").split("/")
var day = birthdate[0]
var month = birthdate[1]

if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
  document.write("You are a Capricorn");
  document.write("<br> <img src='Images/capricorn.jpg' id='capricorn'>");
  
} else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
  document.write("You are a Aquarius");
  document.write("<br> <img src='Images/aquarius.jpg' id='aquarius'>");
  
} else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
  document.write("You are a Pisces");
  document.write("<br> <img src='Images/pisces.jpg' id='pisces'>");
  
} else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
  document.write("You are a Aries");
  document.write("<br> <img src='Images/aries.jpg' id='aries'>");

} else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
  document.write("You are a Taurus");
  document.write("<br> <img src='Images/taurus.jpg' id='taurus'>");
  
} else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
  document.write("You are a Gemini");
  document.write("<br> <img src='Images/gemini.jpg' id='gemini'>");
  
} else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
  document.write("You are a Cancer");
  document.write("<br> <img src='Images/cancer.jpg' id='cancer'>");
  
} else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
  document.write("You are a Leo");
  document.write("<br> <img src='Images/leo.jpg' id='leo'>");
  
} else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
  document.write("You are a Virgo");
  document.write("<br> <img src='Images/virgo.jpg' id='virgo'>");
  
} else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
  document.write("You are a Libra");
  document.write("<br> <img src='Images/libra.jpg' id='libra'>");
  
} else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
  document.write("You are a Scorpio");
  document.write("<br> <img src='Images/scorpio.jpg' id='scorpio'>");
  
} else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
  document.write("You are a Sagittarius");
  document.write("<br> <img src='Images/sagittarius.jpg' id='sagittarius'>");
}