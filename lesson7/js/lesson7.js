'use strict'
// обьекты используются для хранения данных в паре  ключ  значение
// обьекты используются в ооп
let userData = {};
console.log(userData);

//установили значение свойства name объекта userData
userData.name = "Anna"//userdata  объект name - свойство Анна - имя свойства
console.log(userData.name);//Anna

userData.age = 27;
console.log(userData.age);
console.log(userData.['age']);
//в качестве свойств мы можем использовать строки, все что к строке преобразуется, Symbol,

userData.favouriteColors = ['red', 'orange', 'yellow']

console.log(userData.img);//undefined - чтение к несуществующему свойству

//проверка на наличие свойства в объекте

if (userData.img === undefined) userdata.img = 'default'
//userData.img - если естьь свойство но неизвестно какое то ставим userData = null

if ('githubLink'in userData)//оператор in возвращается если свойство с таким названием содержится в userData и false если не содержится

let jsBook = {
   tittle: 'About JS',
   author: 'JS junior',
   pageCount: 102,
}
let cssBook = {
   tittle: 'About CSS',
   author: 'CSS junior',
   pageCount: 1700,

}

userData.books = [jsBook, cssBook];//cssBook  - 1 el из массива


console.log(userData.books[1].pageCount)

// вывести в консоль название книг из userData,
//количество страниц у нее больше 500

for (let book of userData.books) {
  if (book.pageCount > 500){
    console.log (book.tittle)
  }
}

let messages = [//запросить у пользователя код и добавить в отдельный массив текст сообщения, код которого указан пользователем
  {
    text: 'Срочное',
    priority: "high",
    code: 99,
  },
  {
    text: 'Простое сообщение',
    priority: "low",
    code: 8,
  },
  {
    text: 'Срочное сообщение',
    priority: "high",
    code: 88,
  },
]

let userCode = parseInt(prompt("Введите код"));
let texts = [...];

for (let message of mesagges){
  if (message.code > userCode) texts.push(message.text)

    console.log (texts.push)
}


//перебор объекта циклом for in -  для объектов!
  jsBook = {
       tittle: 'About JS',
       author: 'JS junior',
       pageCount: 102,
    }


  for (let propertyName in JsBook){// propertyName - свойство
    console.log (`Имя свойства ${propertyName}, значение ${jsBook[propertyName]}`);
  }

//массив свойств объекта
let keys = Object.keys(jsBook);
console.log(keys);//[""tittle", "äuthor", '"pageCount']


//массив со значениями объекта JsBook
let values = Object.values(jsBook);
console.log (values)// ["äbout JS", ""Junior Js", '"102']

//массив пар  - ключ: значение
let entries = Object.entries(jsBook);
console.log (entries);

//Деструктуризация объекта - позволяет получить отдельные переменные на основе этого объекта
jsBook = {
     tittle: 'About JS',
     author: 'JS junior',
     pageCount: 102,
  }

let {tittle, author, pageCount,...others} = jsBook;
console.log(tittle);
console.log(author);
console.log(pageCount);
console.log(others);


let {loogin, pwd, ...others} = {
  login: "qwerty",
  pwd: "qw12345",
  phone: "",
  email: "",
}
console.log()


let {name: userName, age: userAge} = {name: "Änna", age: 23};
console.log(userName);
console.log(userAge);

//Деструктуризация объектов в параметрах функции

jsBook = {
     tittle: 'About JS',
     author: 'JS junior',
     pageCount: 102,
  }
  function doSmth({tittle, author, pageCount}){
    console.log(tittle);
    console.log(author);
  }
doSmth(jsBook);
