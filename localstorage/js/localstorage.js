"use strict"
//локальное хранилище localstorage
let storage = localStorage;
// {"ключ1": "значение"},
//{"ключ1": 'значение}, - строки
//{"ключ1": значение}, - если массив сохраним в локальное хранилище то работать будет некорректно
storage.setItem("color", "red"); // вывести в хранилище
storage.setItem("background", "yellow");
storage.setItem("background", "green");

//получение данных из локального хранилища
console.log(storage.getItem("color"));// read
console.log(storage.getItem("background"));// green


let arrData = [
  {
    background: "red",
    color: "green"
  }
  {
    background: "pink",
    color: "black"
  }
  {
    background: "orange",
    color: "purple"
  }
];

let arrToJson = JSON.stringify (arrData);
console.log(arrToJson); // тип данных arrToJson  - string

storage.setItem ("array", arrToJson);


let fromStorage = storage.getItem ("array");

//тип данных - array
let arrFromStorage = JSON.parse (fromStorage)//создаст массив как и был а внутри будут объекты
console.log (arrFromStorage);

arrFromStorage.push({background: "white", color: "blue"});

storage.setItem ("array", JSON.stringify (arrFromStorage));
