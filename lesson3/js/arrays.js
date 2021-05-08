"use strict";

let ints = []; //создание пустого массива
  console.log(ints);

let colors = ["blue","red","yelow", "pink"];//[0,1,2,3]-номер элемента(индекс),первый элемент всегда начинается с нуля
  console.log(colors);

//разряженный массив
let nums = [2, 78, ,90, , , -12];
  console.log(nums);

//свойство length
  console.log(colors.length);//выведет 4 элемента 4
  console.log(colors.length);//выведет 7 элементов 7

//доступ к элементам массива
colors = ["blue","red","yelow", "pink"];
 colors [1]="orange";
 console.log(colors);

 let elem = colors[0];
 console.log(elem);

 colors[47]="black";
 console.log(colors);//48
 colors.length=900;//размер массива изменится до указанного
console.log(colors.length);//создаст пустой массив

//многомерный массив
nums = [
    [55, -991, 34, 0],//0
    [9, 23, 81],//1
    [99, 4]//2
];//элементами будут другие массивы

let firstArr = nums[1];
   console.log(firstArr);//[9, 23, 81]

   console.log(firstArr[2]);//81

   console.log(nums[2][1], nums[1][1]);//4 23

   nums[1][1]=22;
    console.log(nums);

//перебор массивов

let str = "Значения элементов массива ints:";
 ints = [67, 99, 12, 65, 6];
   for (let i=0; i<ints.length;i++){

     //console.log(ints[i]);
     str+=ints[i]+" ";
     ints[i]*=ints[i];//позволяет изменять значения элементов массива
   }
console.log(str);
console.log(ints);


//цикл for off
   ints = [67, 99, 12, 65, 6];
   for(let arrElem of ints){//объявили новую переменную любу/
     console.log(arrElem);
   }

   //сумма элементов массива
   let sum=0;//67+99+12+65+6
   ints = [67, 99, 12, 65, 6];
   for ( let arrElem of ints){
     sum=sum+ArrElem;
   }
      console.log(sum);

      let pics = ["one.jpeg", "two.jpeg", "three.jpeg", "four.jpeg"];

      let picsSection = document.getElementById("pics");
         for (let pic of pics){
           let img = document.createElement("img");
           img.setAttribute("src", `img/${pic}`);
           picsSection.append(img);
         }

//методы массивов
    let colors = ["blue","red","yelow", "pink"];
    //1.добавление/удаление первого/последнего элемента

    // удаление последнего элемента
    let lastColor = colors.pop(); //["blue", "red", "yelow"]
    console.log(Lastcolor);
    colors.pop();//["blue", "red"]
    console.log(colors);

//добавление в конец массива
    colors.push("black", "green", "purple");//добавляет в конец массива все перечисленные элементы  один или несколько
    console.log(colors);//["blue","red","yelow", "pink", "black", "green", "purple"]

//удаление первого элемента
   let firstElem=colors.shift()
    console.log(firstElem); //"blue"
    colors.shift(); //["black", "green", "purple"]
    console.log(colors);

//добавление элементов в начало массива
   colors.unshift("green", "red");
   console.log(colors);

   //splice/slice
    let colors = ["blue","red","yelow", "pink"];
    console.log(colors);
    //создает новый массив, не меняет исходный
    let newColors=colors.slice(1,3);
    console.log(newColors);

    let removed = colors.splice(1,2, "greenyelow", "gold");
    console.log(removed); //["red","yelow"]
    console.log(colors); //[""blue", ""greenyelow",""gold", ""pink","green"]

    //удаление нечетных элементов массива
    ints = [-3, 78, 11, 11, 45, 90, 34];
    for (let i=0, i < ints.length; i+=1); {
    for (let i=ints.length-1, i >= 0; i-=1);{
      if(ints[i]%2 !== 0){
        ints.splice(i;1);//delete count - 1
      }
    }
    console.log(ints);
   //includes
   //reverse
   //concat
   //indexOf/lastIndexOf
   //split/join
