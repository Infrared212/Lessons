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

let random = Math.floor(Math.random() * (500 - 10)) + 10;

if(random>25 & random<200) {
   console.log ("Число содержится в интервале (25;200)");

} else if (random<25 & random>200){
   console.log ("Число не содержится в интервале (25;200)");
}
//4
for (let i=2; i+=2) {//переменная старта i=2
   console.log(i);
}
//5
for (let i=0; n=1; i<=10; i+=n,n+=i) {

    console.log(i,n)//???
 }

 //6
 for (let i=1, n=1; i<7, i+=1) {
    console.log(i * n);
 }
//7
let userNum;

while(true){
  //ввести число
  let userNum=parseFloat(prompt("Введите число"))
    if(num>50){
    console.log("Загаданное число больше 50?")
  }else if(userNum=0)
      break;
  }
    if(num<50){
      console.log("Загаданное число меньше 50?");
   }else if(userNum=1)
      break;

    if(num>25){
       console.log("Загаданное число больше 25?");
  }else if(userNum=1)
      break;
    if(num>33){
    console.log("Загаданное число больше 33?");
  }else if(userNum=1) {
    console.log("Загаданное число больше 40?")
  }else if(userNum=0) {
      console.log("Загаданное число больше 37?")
  }else if(userNum=1) {
        console.log("Загаданное число больше 38?")
  }
      break;
}
