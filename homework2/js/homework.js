"use strict";
//1
let count = 98;

if (count >= 90 & count =< 100) {
   console.log("Отлично");

} else if (count<90 & count>=60) {
   console.log("Хорошо");

} else if (count<60 & count>=40){
   console.log("Удовлетворительно")

} else if (count<40) {
   console.log("Попробуй потом")
}

//2
let a = 4, b = 2, c = 7;
  switch(c){
    case "3":
     console.log (a+b);
       break;
    case "5":
      console.log (a-b);
          break;
    case "7":
      console.log (a*b);
             break;
    case "9":
      console.log (a/b);
                break;
  }
//3
let random = 344;

if(random>25 & random<200) {
   console.log ("Число содержится в интервале (25;200)");

} else if (random<25 & random>200){
   console.log ("Число не содержится в интервале (25;200)");
}

let random = Math.floor(Math.random(10, 500));

if(random>25 & random<200) {
   console.log ("Число содержится в интервале (25;200)");

} else if (random<25 & random>200){
   console.log ("Число не содержится в интервале (25;200)");
}
