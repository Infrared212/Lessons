"use strict";

// 1.n=47
const n = 47;
let res = n % 10 + (n - n % 10) / 10;// 7+(47-7)/10=11
console.log(res);
// 2.
let r, t;
r += t;
t = r - t;
r -= t;
console.log(r == t);
// 3.S=2(ab+bc+ac)
let a = 7,
    b = 6,
    c = 5;
a = 7;
b = 6;
c = 5;
res = 2 * (a * b);
console.log(res);

// 4.тернарный оператор
let between, end, start;
between = start < end
    ? end - start
    : 1;
