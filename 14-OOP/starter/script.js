// 'use strict';
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const Marek = new Person('Mark', 1999);
// const Kasia = new Person('Kasia', 2002);
// console.log(Marek, Kasia);
// console.log(Marek instanceof Person);
// //prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// Kasia.calcAge();
// console.log(Marek.__proto__);

// const arr = [23, 4, 54, 5, 5];
// console.log(arr.__proto__);

// //coding chellange1
// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };
// // const Honda = new Car('Honda', 20);
// // Car.prototype.accelerate = function () {
// //   console.log(Number(this.speed) + 10 + 'KM/H');
// // };
// // Car.prototype.brake = function () {
// //   console.log(Number(this.speed) - 5 + 'KM/H');
// // };
// //coding chellange
// class CarCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     console.log(Number(this.speed) + 10 + 'KM/H');
//   }
//   brake() {
//     console.log(Number(this.speed) - 5 + 'KM/H');
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const Honda = new CarCL('Honda', 50);
// console.log(Honda.speedUS);
// Honda.speedUS = 70;

// console.log(Honda.speedUS);
//
//
//218. Inheritance Between "Classes": Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}!`);
// };

// const mike = new Student('Mike', 2003, 'Computer science');
// //coding chellenage 3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBettery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`Car is going ${this.speed} with ${this.charge}%.`);
// };
// const Honda = new EV('Honda', 100, 40);
// Honda.accelerate();
// console.log(Honda);
//
// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.birthYear = birthYear;
//     this.fullName = fullName;
//   }
//   calcAge() {
//     console.log(2077 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}!`);
//   }
//   get age() {
//     return 2077 - this.birthYear;
//   }
//   // set fullName(name) {
//   //   if (name.include(' ')) this._fullName = name;
//   //   else console.log('blad');
//   // }
//   // get fullName() {
//   //   return this._fullName;
//   // }
// }

// class StudentCL extends PersonCL {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}!`);
//   }
//   calcAge() {
//     console.log(`I'am ${2027 - this.birthYear}.`);
//   }
// }

// const Marta = new StudentCL('Marta Benz', 2011, 'Physics');

// //221. Inheritance Between "Classes": Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - birthYear);
//   },
//   init(firstName, birthYear) {
//     this.birthYear = birthYear;
//     this.firstName = firstName;
//   },
// };
// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// const jay = Object.create(StudentProto);
// //223. Encapsulation: Protected Properties and Methods
// class Account {
//   //public cl
//   locale = navigator.language;
//   //private cl
//   #movements = [];
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     //this._movements = [];
//     //this.locale = navigator.language;
//   }
//   //private method
// }

//coding chellange 4
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBettery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`Car is going ${this.speed} with ${this.charge}%.`);
// };
// const Honda = new EV('Honda', 100, 40);
// // Honda.accelerate();
// // console.log(Honda);

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
// }

// class EVCl extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }
//   chargeBettery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.#charge -= 1;
//     console.log(`Car is going ${this.speed} with ${this.charge}%.`);
//     return this;
//   }
// }
// const rivian = new EVCl('honda', 100, 50);
// console.log(rivian);

// rivian.accelerate().chargeBettery(430);
// console.log(rivian);

const Car = function (make, year, color) {
  this.color = color;
  this.year = year;
  this.make = make;
  this.showInfo = function () {
    console.log(`This ${make} was made in ${year} and have ${color} color.`);
  };
};
Car.prototype.wheels = function () {
  console.log(`have ${this.color} wheels`);
};
const honda = new Car(`honda`, 1999, `black`);
honda.showInfo();
honda.wheels();
