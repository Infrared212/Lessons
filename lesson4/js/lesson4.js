"use strict"
let a=3, b=9;
let result = a+b;
console.log(result);


function getSum(first,second) {// параметры
  return first + second;
}
let l = 9, k = -166;
getSum = getSum (l,k)
console.log (sum);

let x = 12, y = 91;
sum = getSum(x,y);
console.log(sum);

//написать функцию? которая принимает минимальное из двух чисел
function getMin(a,b){
  //return  a < b ? a : b;
 if (a < b) return a;
 return b;
}
console.log(getMin(3,7));

//2 параметра: возраст и имя
// если возраст вне диапазона [7,200] - Укажите другой возраст
//если возраст меньше 18  - Вы не сможете осуществлять покупки
// в остальных случаях  - Весь функционал доступен
function greetingStr(age, name="Гость"){// name - необязательный параметр, сначала прописываются обязателоьные параметры
  if (age <= 7 || age >= 200) return `${name},Укажите другой возраст`;
  if (age<18) return `${name}, Вы не сможете осуществить покупки`;
  return `${name}, Весь функционал доступен`;
}


let str = greetingStr(34, "Алиса)
console.log(Str);

str = greetingStr(27);
console.log(str);//значение name = undefined

function paintElem(elem,"yellow"){
  elem.slyle.background = color;
}

paintElem(document.body,"green");
paintElem(document.body);


//переменное количество аргументов
function getAverage(...names){
  let sum = 0;//среднее арифметическое
  for (let n of nums){//если функция принимает на вход несколько аргументов
    sum+=n;
  }
  return sum/nums.length
}
let avg = getAverage(8,12,-90,45,11,800)
console.log(avg);
avg = getAverage(56,0,1)
console.log(avg);

function fullinfo (name, surname, ...others){

}
fullinfo (Олег, Петров, 22 года);
fullinfo (Елена, Петрова);


let catName = "Том";
let codes = [4,5,6];

function changeName(str){
  str += "Кот"
}
function changeCodes(arr){
  for(let i=0; i< arr.length; i+=1){
    arr[i] *= 10;
  }
}
 changeName(catName);
 changeCodes(codes);
 console.log(catName);
 console.log(codes);//когда работаем с ссылочными типами? передается ссылка/ Когда работаем с примитивами - происходит копирование значений

 let s = 78;
let t = s;

let nArr = [4, 5, 6];
let other = nArr;
