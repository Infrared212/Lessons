'use strict';
// однострочный комментарий

/* многострочный
   комментарий */

// отладка
console.log('Данные для отладки');

// переменные
// объявление перменных
let age = 26;
age = 27;
console.log(age);

let userLogin = 'qwerty', password = 'qwerty123';
// let userLogin = 'qwerty';
// let password = 'qwerty123';

let height = 400;
let width = 700;
// let height = 400, width = 700;

let active, closed = 1;

// значение константы необходимо присвоить в момент объявления
// нельзя изменить в дальнейшем
const PI = 3.14; // ELEMENT_STATE
console.log(PI);

// var data = 'Данные';

// типы данных
// 1 примитивные типы данных
// 2 ссылочные типы данных

// примитивные типы данных
// 1. Числа: тип number
height = 89;
width = 23.89;
let degree = -100;

// 2. Строки: тип string
degree = '-100C';
userLogin = 'wind009';
userLogin = "qwe";

let loginInfo = `Значение переменной userLogin равно ${userLogin}, ${password}`;
console.log(loginInfo);

// 3. Логический: тип boolean
active = true;
closed = false;
console.log(active, closed);

// 4. Значение неизвестно: null
let books = null;

// 5. Значение не было присвоено: undefined
let elem;
console.log(elem);

// определение типа данных переменной typeof имяПеременной
console.log(typeof active);
console.log(typeof loginInfo);
console.log(typeof age);
console.log(typeof books);










