"use strict"
//1
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function  goodsFilter(obj, from, to){
    let filtered = {};
    if (typeof obj === "object" && typeof from === "number" && typeof to === "number") {
        for (let propertyName in obj) {
              if (from < obj[propertyName].price && obj[propertyName].price < to) {
                  filtered[propertyName] = obj[propertyName]
              }
        }

        return filtered
    }
    return false
}

console.log(goodsFilter(goods, 100, 1500))

//2
function goodsFilter2(obj, title, countToCart){

      let filtered = {};

      if (typeof obj === "object" && typeof title === "string" && typeof countToCart === "number") {

          for (let propertyName in obj) {
                if (obj[propertyName].count < countToCart){
                    return false
                }
                if (obj[propertyName].title === title){
                    filtered[propertyName] = obj[propertyName]
                    filtered[propertyName].count -= countToCart
                }
          }
      }

      return filtered
}


console.log(goodsFilter2(goods, "Арфа", 3))



//3
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function first(books, author) {
      let arr = [];
      for (let i = 0; i < books.length; i++) {
           if (books[i].author === author) {
             arr.push(books[i])
           }
         }

      return arr
}

console.log(first(books, 'Пушкин'))

//4

function compare(a, b){
    // -1 отриц число если а < b
    // 1 полож число если а>b
    // 0 если а=b
    if (a.title.length < b.title.length) return -1;
    if (a.title.length > b.title.length) return 1;
    // return 0;
    // return a - b;
}


function sorted(books){
  let newArray = books.sort(compare);
    return newArray;
}

console.log(sorted(books))
