'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //es5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 100;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   booking.push(bookings);
// };
// createBooking('b14', 3);

// const flight = `lh123`;
// const marek = {
//   fullName: `Marek Krzyzowski`,
//   passport: 4452355345,
// };

// const chenkIn = function (flightNumber, passenger) {
//   flightNumber = `lh699`;
//   passenger.fullName = `Mr.` + passenger.fullName;
//   console.log(passenger.fullName, flightNumber);
//   passenger.passport === 4452355345 ? console.log(`ok`) : console.log(`nope`);
// };

// chenkIn(flight, marek);
// console.log(flight);
// console.log(marek);

// const newPassport = function (person) {
//   person.passport = Math.random() * 100000000000;
//   console.log(person.passport);
// };

// newPassport(marek);

//131.
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase(); //zwraca string bez spacji
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...otherWords] = str.split(' ');
//   return [firstWord.toUpperCase(), ...otherWords].join(' ');
// };
// const transformer = function (str, fn) {
//   return fn(str);
// };
// console.log(oneWord('javascript is cool'));
// console.log(transformer('javascript is cool', upperFirstWord));
// //ja
// const toUppertext = function (str) {
//   return str.toUpperCase();
// };
// const text = function (str, fn) {
//   console.log(`To jest zmodyfikowany ${fn(str)}`);
// };
// text(`Nasz string`, toUppertext);

//132. Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} to ${name}`);
//   };
// };
// console.log(greet('Hey')(`Marek`));

//133
// const lufthansa = {
//   airline: `Lufthansa`,
//   iataCode: `lf`,
//   booking: [],
//   //Book: function(){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat at ${this.airline} and flight ${this.iataCode}${flightNum}.`
//     );
//     this.booking.push({ flight: ` ${this.iataCode} ${flightNum}` });
//   },
// };
// lufthansa.book(131, `Marek Krzyzowski`);

// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   booking: [],
// };
// const book = lufthansa.book;
// book.call(eurowings, 12, ` Marke krzuyzowsk`);
// console.log(eurowings);

//135 coding challange
// const poll = {
//   questions: `What is you fav programming language?`,
//   options: [`0: JavaScript`, `1: Python`, `2:Rust`, `3: c++`],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.questions}\n ${this.options.join('\n')}`)
//     );
//     if (typeof answer === `number` && answer < 5) {
//       switch (answer) {
//         case 1:
//           this.answers[0] += 1;
//           break;
//         case 2:
//           this.answers[1] += 1;
//           break;

//         case 3:
//           this.answers[2] += 1;
//           break;

//         case 4:
//           this.answers[3] += 1;
//           break;
//       }
//     } else {
//       prompt(`Put another number`);
//     }
//     poll.displayResults();
//   },
//   displayResults() {
//     const results = prompt(
//       `What type of results you want to get (array/ string)?`
//     );
//     const cl = console.log(
//       `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]} and ${this.answers[3]}. `
//     );
//     if (results === 'array') {
//       console.log(this.answers);
//     } else if (results === 'string') {
//       return cl;
//     } else {
//       return cl;
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
//137
// const secureBooking = function () {
//   let passengerCount = 0;
//   //console.log(passengerCount);
//   return function () {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

//138
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
//f();

//ex2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding at ${n} pasengers.`);
//     console.log(`There are 3 groups with ${perGroup} people.`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait}s.`);
// };
// boardPassengers(180, 3);
//139. Coding Challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
