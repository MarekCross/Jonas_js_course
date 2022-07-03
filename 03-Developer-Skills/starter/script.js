// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//TODO FIXIT KOM
//59. Using Google, StackOverflow and DN
// const temperatures = [3, -2, -6, `error`, -1, 9, 13, 15, 17, 14, 9, 5];
//1. Unstastand the problem
// What is temp aplitioude? It is different betweene lowest and highest temp in room
//how to compute max and min temp.
//How sensor error look like, what to do with it?
//2. break up to sup problems
// How to ignore error?
// find max and min value in temp arrey
//subtract (odejmij) min and max
// const calcTemAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== `number`) continue;

//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(`Najwyższa wartośći to ${max}.`);
//   console.log(`Najniższa wartośći to ${min}.`);
//   return max - min;
// };
// const aplitude = calcTemAmplitude(temperatures);
// console.log(aplitude);

//Problem 2.Program should return amplitude from 2 different arrays

// const calcTemAmplitude2 = function (t1, t2) {
//KOM MDN array.prototype.concat
// const array1 = [a,b,c];
// const array2 = [d,e,f];
//const array3 = array1.concat(array2);
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== `number`) continue;

//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(`Najwyższa wartośći to ${max}.`);
//   console.log(`Najniższa wartośći to ${min}.`);
//   return max - min;
// };
// const aplitude2 = calcTemAmplitude2([3, 1, 3, 9], [-6, 2, 33, 4]);

///61. Debugging with the Console and Breakpoints
// const measureKelvin = function () {
//   const measurment = {
//     type: `temp`,
//     unit: `celsius`,
//     value: Number(prompt(`Degrees celcius: `)),
//   };

//   const kelvin = measurment.value + 273;

//   return kelvin;
// };
// console.log(measureKelvin());
//62. Coding Challenge #1
//4 steps in solving problems
//1. how sholud it print in console? Should this be 1 string or many of them one by one?
//2.Making functions. How to print one by one string on console.
//3 funtion printForecast (arr) {
// for(let i = 0; i < arr.lenght;i++)
//cl `${arr[i]} in day 3{i}`;
//}
const data1 = [17, 21, 13];
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = ` ${arr[i]}C in ${i + 1} days`;
    console.log(str);
  }
};
printForecast(data1);
