"use strict";
// function calcAge(birthYear) {
//   const age = 2077 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You are ${age} born in ${birthYear}`;
//     console.log(output);

//     birthYear > 1981 && birthYear < 1996 ? console.log(`You are milenial`) : console.log(`You are not a  milenial`);
//   }
//   printAge();

//   return age;
// }
// const firstName = "Marek";
// calcAge(1999);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = `Marek`;
// let job = `programmer`;
// const year = 1999;

// trying functions with hoisting
//console.log(adddeclaration(2, 5));
//console.log(addExpression(2, 5));
//console.log(addArrow(2, 5));
//      //function declatarion
// function adddeclaration(a, b) {
//   return a + b;
// }
// //      //function expresion
// const addExpression = function (a, b) {
//   return a + b;
// };
// //      //function arrow
// var addArrow = (a, b) => a + b;

// //example
// if (!numProducts) deleteCart();
// var numProducts = 10;
// function deleteCart() {
//   console.log(`All products deleted`);
// }
///const calcAge = function (birthYear) {
//console.log(birthYear - 2077);
//console.log(this);
//};
//calcAge(1999);
// var firstName = `jonas`;

// const jonas = {
//   firstName: "Marek",
//   year: 1989,
//   calcAge: function () {
//     console.log(this);
//     console.log(2077 - this.year);
//     //    //1 wersja z stworzeniem this poza funkcją w której ma wystapić
//     // const self = this; //this odwołuje się do obiektu w którym sięznajduje
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1990);
//     // };
//     //     //2 wersja z arrow functions

//     const isMillenial = () => {
//       console.log(this);
//       console.log(self.year >= 1981 && self.year <= 1990);
//     };
//     isMillenial();
//   },
//   great: function () {
//     console.log(`My name is ` + this.firstName);
//   },
// };
// jonas.calcAge();

// const person = {
//   name: `bark`,
//   iAm: function () {
//     console.log(`I am ${this.name}`);
//   },
//   multiFunctions: function () {
//     const IamArrow = () => {
//       const IamArrow2 = () => {
//         console.log(this.name);
//       };
//       IamArrow2();
//     };
//     IamArrow();
//   },
// };
// person.iAm();
// person.multiFunctions();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(6, 9);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: `Marek`,
//   age: 22,
// };
// const friend = me;
// friend.age = 29;

//Primitives vs. Objects
//    //Primitives
let lastName = `williams`;
let oldLastName = lastName;
lastName = `Davis`;
//    //Reference types
const jessica = {
  firstName: `Jessica`,
  lastName: `Davids`,
  age: 23,
};
const marriageJessica = jessica;
marriageJessica.lastName = `williams`;
//copy object
const jessica2 = {
  firstName: `Jessica`,
  lastName: `Davids`,
  age: 23,
  family: [`alice`, `mark`],
};
const jessica2Copy = Object.assign({}, jessica2);
jessica2Copy.age = 40;
console.log(`Wiek jessici2 to ${jessica2.age}, a kopi to ${jessica2Copy.age}.`);
jessica2Copy.family.push("mary");
jessica2Copy.family.push("john");
