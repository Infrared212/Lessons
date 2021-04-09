"use strict";
//if, switch
let state = 0;
if (state===0){
  console.log("Загрузка завершена");//можно без фигурных скобок
} else if (state===1){//этих блоков может быть сколько угодно, проверяться не будет,если будет true
  console.log("Загрузка...");
}
else{
  console.log("Ошибка статуса загрузки");//если true,то дополнительный блок else игнорируется
}
//let state=1 if (state) console.log("Загрузка завершена") - true

//даны перемнные age и exp
//если значение перемнной age больше 100,
//вывести в консоль "Мы вам перезвоним"
//в противном случае перейти к проверке exp
//если exp меньше 5 вывести "Вы подходитте на должность стажера"
//в противном случае вывести 'Вы подходите на должность разработчика'
let age=70, exp=5;
if(age<=18 || age<exp||exp<0){
  console.log("Ошибка ввода данных");
}
if(age>100){
  console.log("Мы вам перезвоним");
}
else if(exp<5){
  console.log("Вы подходите на должность стажера");
}
else{
  console.log("Вы подходите на должность разработчика");
}

//switch
    let month="январь";
    switch(month){
      case "декабрь":
      case "февраль":
      case "январь":
       document.body.style.background="blue";
         break;
      case "март":
      case "апрель":
      case "май":
       document.body.style.background="yellow";
         break;
      case "июнь":
      case "июль":
      case "август":
       document.body.style.background="green";
         break;
      case "сентябрь":
      case "октябрь":
      case "ноябрь":
       document.body.style.background="orange";
         break;
      default:
      console.log("Ошибка ввода");
      document.body.style.background="black";
    }

let sum=12000, code=9075;
switch(code){
  case "4653":
   console.log ("Скидка 30%");
    break;

}
