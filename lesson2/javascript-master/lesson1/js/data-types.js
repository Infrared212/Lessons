"use strict";
// однострочный комментарий

// многострочный
// комментарий

// отладка
console.log("Данные для отладки");

// переменные
// объявление перменных
let age = 26;
age = 27;
console.log(age);

let active,
    closed = 1,
    // let userLogin = 'qwerty';
    // let password = 'qwerty123';

    height = 400,
    password = "qwerty123",
    // let height = 400, width = 700;

    userLogin = "qwerty",
    width = 700;

// значение константы необходимо присвоить в момент объявления
// нельзя изменить в дальнейшем
const PI = 3.14; // eLEMENT_STATE
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
degree = "-100C";
userLogin = "wind009";
userLogin = "qwe";

const loginInfo = `Значение переменной userLogin равно ${userLogin}, ${password}`;
console.log(loginInfo);

// 3. Логический: тип boolean
active = true;
closed = false;
console.log(
    active,
    closed
);

// 4. Значение неизвестно: null
const books = null;

// 5. Значение не было присвоено: undefined
let elem;
console.log(elem);

// определение типа данных переменной typeof имяПеременной
console.log(typeof active);
console.log(typeof loginInfo);
console.log(typeof age);
console.log(typeof books);
