"use strict"
 // милая мила милеет умиляя
function getWords (...words)
let getWords = "милая мила милеет умиляя"
let word = "мил";
let sum = 0;
let iterName = ''

for (let char of getWords) {

  for (let wordChar of word){

      if(wordChar == char && word[word.indexOf(wordChar)-1] == getWords[getWords.indexOf(char)-1]){
          iterName += char

          if(iterName == word){
              sum += 1;
              iterName = ''
          }

      }

    }
}

console.log(`Слово ${word} встречается в строке ${getWords} ${sum} раз`)

//2
let str1 = "anna"
let str2 = str1.slice (0, 0);
if (str1 === str2 ) {

    console.log (`Слово ${str1} является палиндромом`);
  }
