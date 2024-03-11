var year = prompt("Enter year: ")

if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
  document.write(year + " is a leap year")
} else {
  document.write(year + " is a not leap year")
}