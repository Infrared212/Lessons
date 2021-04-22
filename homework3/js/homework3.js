"use strict"
//1
let nums = [
        [23, 56, 75, -90, 123],//0
        [17, 0, -6429, -122],//1
        [19, 86, 55, -3, 900, 0, 0],//2
        [4, 9, -2]//3
];

for (let i=0; i<nums.length;i++) {

  for (let j=0; j<nums[i].length; j++) {
     nums[i][j]+=10
   }
}
console.log(nums);

//2
let nums_2 = [1, 5, 8, 4, 3, 12, 3];

let minNums = Math.max(...nums_2);
let maxNums = Math.min(...nums_2);
let index_max = nums_2.indexOf(maxNums)
let index_min = nums_2.indexOf(minNums)

nums_2.splice(index_max, 1, minNums);
nums_2.splice(index_min, 1, maxNums);

console.log(nums_2);

//3
let nums3 = [3, 7, -4, 6, -67, 8, -1];
let lessZero = num => num < 0
let resArr = nums3.filter (lessZero);

console.log(resArr);
