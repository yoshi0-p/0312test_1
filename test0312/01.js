
function leapYear(year){
  if (year % 4 == 0 && year % 100 != 0 && year % 400 == 0) {
    return "yes"
  } else {
    return "no"
  }
}

console.log(leapYear(2021));
