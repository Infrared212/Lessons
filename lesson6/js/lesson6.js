'use sctrict';
let Title = "Javascript"; //h2
let duration = 2.5;// p продолжительность
let price = 2000;// p стоимость
let background = "yelow";
let html =
`<div style = "background: ${background}">
  <h2>${Title}</h2>
  <p>Продолжительность: ${duration}</p>
  <p>Стоимость: ${price}</p>
</div> `;

document.body.innerHTMl = html;
//строки внутри хранятся как массив символов Поезд  ['П', 'о' , 'е  , 'з', 'д']
//символы сохраняются в UTF-8, строки неизменны

let train = "Поезд";
console.log(train.length);//5 возвращает количество символов юникода
console.log(train[2]);//e

//методы строк
//1.приведение к верхнему и нижнему регистру
let NewStr = train.toUpperCase();
console.log(train.toUpperCase);

newStr = train.toLowerCase();
console.log(newStr); //  создается строка где каждая буква в нижнем регистре

//2. trim позволяет убрать пробелы с начала и конца строки
train = "Поезд";
newStr = train.trim();
console.log(NewStr);// "Поезд"

//3
train = "Поезд";
console.log(train.includes("ез"));// includes проверяет содержится ли указанная последовательность, метод чувствителен к регистру
console.log(train.startsWith("По"))//начинается ли строка с указанной последовательностью
console.log(train.endsWith("д"))//заканчивается ли строка с указанной последовательностью


//4 массив строки
let ArrFromStr = train.split("");// разбивает объект на массив строк
console.log(ArrFromStr);

//join из массива в строку
let textFrom = ArrFromStr.join
console.log(textFrom)//"Длинный : Поезд"

// сравнение строк

train = "Поезд";
let train2 = "поезд";

console.log(train === train2);// false


let compareRes = train.localeCompare(train2, undefined, {sensitivity: 'accent'});// Сравнение без учета регистра/ у одной строки метод вызываем - у второй передаем - возвращает число 0 + -
//отриц число если train меньше чем train2
//0 если строки равны
// положит число если train больше train2

console.log(compareRes);

train = "Яблоко"
console.log(train.substring(1, 4))//бло
console.log(train.substring(1))//блоко

//Заменить все буквы в слове на строчные а первую на заглавную

let someStr = "gtghkgkYtcdk";
someStr = someStr[0].toUpperCase() + someStr.substring(1).toLowerCase();
console.log(someStr);

let getStr = str => str[0].toUpperCase() + someStr.substring(1).toLowerCase();
console.log(getStr("kgjlgTgmb"));


//indexOf lastIndexOf slice для метод строк
