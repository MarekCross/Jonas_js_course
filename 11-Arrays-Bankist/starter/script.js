'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelOperationTransfoer = document.querySelector(
  '.operation--transfer--h2'
);

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');

const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const CreateUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
  });
};
CreateUsername(accounts);

const updateUI = function (acc) {
  //display movements

  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //disply salary
  calcDisplaySummary(acc);
};
//158. event handlers
let currentAccount;

btnLogin.addEventListener(`click`, function (event) {
  //Prevent form from submitting
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(` `)[0]
    }.`;
    containerApp.style.opacity = 1;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = ` `;
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = ``;

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    labelOperationTransfoer.textContent = `Operation succesfull.`;
    updateUI(currentAccount);
  } else {
    labelOperationTransfoer.textContent = `Operation unsuccesfull.`;
  }
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    //add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = ``;
  }
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.slice(index, 1);
    containerApp.style.opacity = 0;
  }
});
let sorted = true;

btnSort.addEventListener(`click`, function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//142. Simple Array Methods
// let arr = [`a`, `b`, `c`, `d`, `e`];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -1));
// //splice
// console.log(arr.splice(-1));
// console.log(arr);
// //reverse
//let arr2 = [`e`, `d`, `c`, `b`, `a`];
// console.log(arr2.reverse());
// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// //join
// console.log(letters.join(`-`));
// //143
// console.log(arr.at(0)); //=arr[0]
// console.log(arr.at(-1)); //ostatnie arr

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (move, index, array) {
//   if (movements > 0) {
//     console.log(`Move ${index}: You deposited ${move}`);
//   } else {
//     console.log(`Move ${index}: You withdrew ${move}`);
//   }
// });
//145
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// //map
// currencies.forEach(function (value, key, map) {
//   console.log(`Value ${key}: You withdrew ${value}`);
// });
// //set
// currencies.forEach(function(value, key map){})
//
//148. Coding Challenge #1
// const juliasDogs = [3, 5, 2, 12, 7];
// const katesDogs = [4, 1, 15, 8, 3];

// const checkDogsAge = function (array1, array2) {
//   const newArray1 = array1.slice(1, -2);
//   const juliasAndKatesDogs = newArray1.concat(array2);
//   juliasAndKatesDogs.forEach(function (dogage, index) {
//     dogage > 2
//       ? console.log(`Dog nr ${index + 1}: is ${dogage} so it is a adult`)
//       : console.log(`Dog nr ${index + 1}: is ${dogage} so it is a puppy`);
//   });
// };
// checkDogsAge(juliasDogs, katesDogs);
//150. The map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;
//const map = movements.map(mov => mov * euroToUSD);

//console.log(map);
//for of loop vs map
// const movToUsd = [];
// for (const mov of movements) {
//   movToUsd.push(mov * euroToUSD);
// }
// //
// const movDesc = movements.map(
//   (mov, i) =>
//     `Move ${i + 1}: You ${mov > 0 ? 'deposit' : 'widthrow'} ${Math.abs(mov)}`
// );
// console.log(movDesc);
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// const onlyNegatives = movements.filter(function (mov) {
//   return mov < 0;
// });
//153. The reduce Method
// const oneAndOnly = movements.reduce(function (
//   accumulator,
//   obecny_element,
//   index,
//   array
// ) {
//   console.log(`Iteration ${index}: ${accumulator}`);
//   return accumulator + obecny_element;
// },
// 0);
//max value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);
// const max = movements.reduce((acc, mov) => {
//   return acc + mov;
// }, movements[0]);
// console.log(max);

//154. Coding Challenge #2

// const age1 = [16, 6, 10, 5, 6, 1, 4];
// const age2 = [5, 2, 4, 1, 15, 8, 3];
// const cCh2 = function (age1) {
//   const calcAverageAge = age1.map(function (dogAge) {
//     let humanage = 0;
//     dogAge <= 2 ? (humanage = 2 * dogAge) : (humanage = 16 + dogAge * 4);
//     return humanage;
//   });
//   const adultsDog = calcAverageAge.filter(humanage => humanage > 18);
//   const avgAge = adultsDog.reduce(function (acc, age, i, arr) {
//     return acc + age / arr.length;
//   }, 0);
//   console.log(avgAge);
// };
// cCh2(age1);
// cCh2(age2);

//155. The Magic of Chaining Methods
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;
// const totalDepositUsd = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUSD)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUsd);

//156. Coding Challenge #3
// const calchumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age > 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calchumanAge([16, 6, 10, 5, 6, 1, 4]));

//157. The find Method
// const firstWD = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWD);
// console.log(accounts);
// const account = accounts.find(acc => (acc = 'Jessica Davis'));
//
//161. some and every
// console.log(movements.includes(-130));

// const someDeposit = movements.some(mov => mov > 1500);
// console.log(someDeposit);

// console.log(movements.every(mov => mov > 0));

//162. flat and flatMap
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat(1));

// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat(1)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
// //flatmap
// const overallBalanceFM = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalanceFM);

//163. Sorting Arrays
// const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
// console.log(owners.sort());
// console.log(movements);

// //return <0 a b
// //return >0 b a
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

//164
// const y = Array.from({ length: 7 }, () => 1);
// const y1 = Array.from({ length: 7 }, (obecnyElement, index) => index + 1);
// // 100 time dice
// const dice = Array.from(
//   { length: 100 },
//   () => Math.floor(Math.random() * 6) + 1
// );
// console.log(dice);

//166. Array Methods Practice
//1
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0);
// console.log(bankDepositSum);
//2
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;
// console.log(numDeposits1000);

// 167. Coding Challenge #4

const dogs = [
  {
    weight: 22,
    curFood: 250,
    owner: [`Alice`, `Bob`],
  },
  {
    weight: 8,
    curFood: 200,
    owner: [`Matilda`],
  },
  {
    weight: 13,
    curFood: 275,
    owner: [`Sarah`, `John`],
  },
  {
    weight: 32,
    curFood: 340,
    owner: [`Michael`],
  },
];
//1
for (const dog of dogs) {
  dog.recommendedFood = dog.weight * 0.75 * 28;
}
console.log(dogs);
//2
const szukaj = dogs.find(dog => dog.owner.includes(`Sarah`));
if (szukaj.recommendedFood * 1.1 < szukaj.curFood) {
  console.log('Pies je źle1');
} else if (szukaj.recommendedFood * 0.9 > szukaj.curFood) {
  console.log('Pies je źle2');
} else {
  console.log('Pies je dobrze');
}
console.log(szukaj);

//3
const ownersEatToMuch = dogs
  .filter(dog => dog.recommendedFood > dog.curFood * 1.1)
  .map(dog => dog.owner)
  .flat(1);

const ownersEatToLittle = dogs
  .filter(dog => dog.recommendedFood < dog.curFood * 0.9)
  .map(dog => dog.owner)
  .flat(1);

console.log(ownersEatToMuch);
console.log(ownersEatToLittle);
//4
let toMuch = [];
let toLittle = [];

const stringNames = function (stringType, arrayname) {
  for (let i = 0; i < stringType.length; i++) {
    if (i === stringType.length - 1) {
      arrayname.push(`${stringType[i]} `);
    } else {
      arrayname.push(`${stringType[i]} and `);
    }
  }
};
stringNames(ownersEatToMuch, toMuch);
stringNames(ownersEatToLittle, toLittle);
console.log(`${toMuch.join('')}eats to much!`);
console.log(`${toLittle.join('')}eats to much!`);
//5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
//6
const checkEating = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEating));
//7
console.log(dogs.filter(checkEating));

//8
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
