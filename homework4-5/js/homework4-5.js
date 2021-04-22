"use strict"
//1
function greetingStr(count, name = "товар") {
  if (count % 10 == 1){
   return name

 } else if (count % 10 > 4 & count %10 < 20 & count % 10 == 0){
      return name + "ов"

  } else if (count % 10 == 2 & count % 10 == 3 & count % 10 == 4){
      return name + "а"
  }
}
console.log(count);

//4
let numsArr = [
            [3, 5, -1, 6, 0],
            [56, -9, 111, 6],
            [11, 86, -12],
        ];

  for (let i = 0; i < numsArr.length; i++) {
    for (let j = 0; j < numsArr.length; i++) {
      nums[i][j] += 10;
    }
  }
  console.log (nums);
