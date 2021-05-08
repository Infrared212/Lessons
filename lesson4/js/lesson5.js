"use strict"
//анонимные функции можем вызвать только после объявления
let sqrt = function(x){
  return x*x;
}
 let res = sqrt(4);
console.log(res);
//стрелочные функции
sqrt = x => x * x;//если в теле функции только одна инструкция и функция должна вернуть какой-то результат - return не ставится
let doubled = x => x * 2;
let printTitle = (elem, text) => {//если появляются фигурные скобки то нужен return
  if (text.length < 3) return;
  elem.InnerText = text.ToupperCase();
}
printTitle(document.body, Функции);

//любая функция может быть передана в качестве аргумента в другую функцию
function changeNum (num, func) {
  return func(num);
}
res = changeNum (12, sqrt);//sqrt- передается либо имя переменной в которой нахзодится функция либо анонимную функцию целиком
res = changeNum (12, x => x + 10);

function getNewArr(arr, func){
  let newArr = [];
    for(let elem of arr){
      newArr.push(func(elem));
    }
  return newArr;
}
let arr = [4, 9, 1, 0, -5];
let NewArr = getNewArr(arr, sqrt);//[16, 81, 1, 0, 25]
NewArr = getNewArr(arr, x=>x+100);//[104, 109, 101, 100, 95]

// сортировка массивов
let colors = ["red", "blue", "orange", "gold"];
colors.sort();
console,log(colors);// blue gold orange red

function compare(a, b){
// -1 отриц число если а < b
// 1 полож число если а>b
// 0 если а=b
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
  return a - b;
}

let ints = [45, 78, 12, -90, 3335, 78, 7770, 0];
ints.sort(compare);// числа не отсортирует
ints.sort((a, b => b - a))
console.log(ints);//

ints = [45, -78, 12, -90, -3335, 78, 7770, 0];
//filter() true false

let lessZero = num => num < 0;
let resArr = ints.filter(lessZero);// ints.filter(num => num < 0) [-78, -90, -3335]
resArr = ints.filter(nums => nums % 2 == 0);//передал массив из четных чисел

//map
resArr = ints.map(n => n * 100);
console.log (resArr);

//every() true false
res = ints.every(n => n > 0);
console.log(res);

//some true false
res = ints.some(n => n > 0);
console.log(res);


let func = (elem, index, arr) => {
  console.log(`Элемент массива = ${elem}`);
  console.log(`Индекс элемента массива = ${index}`);
  console.log(`Массив = ${arr}`);
}
 arr[Index] *=10;
 ints.forEach(func) ;//в отличии от мап ничего не создает но может изменитть существующий массив
fot (let i=0; i < ints.length, i++)
func(ints[i], i, ints);


let first = ["Апрель", "Май", "Октябрь", "Февраль", "Июнь"],
second = ["Январь", "Декабрь", "Октябрь", "Июль", "Май"];
//IndexOf
function getArr (arr1, arr2) {
  return arr1.filter(elem => arr2.IndexOf(elem) >= 0)
}


//замыкание
function sub(x) {
  let n = x;
  return function(m){
    return n * m;
  }
}

let subSix = sub(6);
res = subSix(10);
console.log(res);
res = subSix(5);
console.log(res);
