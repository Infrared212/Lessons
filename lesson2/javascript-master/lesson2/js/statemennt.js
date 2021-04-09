"use strict";
let userInput = parseInt(prompt("Введите данные"));//модальное окно, parseInt считывает число из строки, parseFloat считывает число с плавающей точкой
console.log(userInput);//выводит сообщение в модальном окне
//while
while(true) {//бесконечный цикл
  let userInput = parseInt(prompt("Введите число"));
  console.log(userInput*2);
  if(num===0) break;
}
let start = 1;
let end = 14;
//вывести в консоль все четные числа от start до end
while(start<=end) {
  if(start%2===0) console.log(start);//без приравнивания нулю - нечетные числа
  start+=1;
}
//от 90 до 0 с шагом 5
for(let i=90;i>=0;i-=5){//переменная старта i=90
  console.log(i);
}
let plates=10;
let fairy=4;
while(plates>0 && fairy>0){
  plates-=1;
  fairy-=0.5;
}
console.log(plates,fairy);


let num=4;
while(true){
  //ввести число
  let userNum=parseInt(prompt("Угадайте число"))
  if(userNum===0){
    console.log("Игра завершена")
      break;
  }
if(username===num){
  console.log("Вы угадали");
  break;
  if(userNum>num) console.log("Загаданное число меньше");
  else console.log("Загаданное число больше");
}
