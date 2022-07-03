'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
///112
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  //dodawanie obiektów w es6
  //openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = 1,
    address = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time} :) `
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};
//         //111.
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for (const item of menu) console.log(item);
//for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// restaurant.orderDelivery({
//   //time: `22:30`,
//   address: `Via Roma 22 Katowice`,
//   mainIndex: 2,
//   starterIndex: 2,
// });
// //109. Logical Assignment Operators
// const restaurant1 = {
//   name: `Mario Pizza`,
//   numGuests: 20,
// };
// const restaurant2 = {
//   name: `Luigi Pizza`,
//   owner: `Luigi Brother`,
// };
//restaurant2.numGuests = restaurant2.numGuests || 10;
//restaurant1.numGuests = restaurant1.numGuests || 10;

//restaurant2.numGuests ??= 11; //jeżeli wartośc jest falsy, nie istnieje, ustaw na 11

//restaurant2.owner &&= `anonim`; //jeżeli wartość istnieje, jest truthy, przypisz do niej tekst

// const arr = [2, 3, 4, 5];
// const [x, y, z, f] = arr;

//let [main, secondary] = restaurant.categories;

// [main, secondary] = [secondary, main];
// console.log(main);

//console.log(restaurant.order(2, 0));

//const [starter, main] = restaurant.order(2, 0);
//nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [x, y]] = nested;
// console.log(x);

//default values
//const [p = 1, q = 1, r = 1] = [8, 9];

// const { name, openingHours, categories } = restaurant;

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// const { menustart: menu = [], starterMenu: starter = [] } = restaurant;
// //zamiana zmiennych w obiektach
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// //Nested objects
// const {
//   fri: { open: otwarcie, close: zamknięcie },
// } = restaurant.openingHours;
// console.log(otwarcie, zamknięcie);

// const arr = [7, 8, 9];
// const newGoodArray = [1, 2, ...arr];
// ///console.log(...newGoodArray);

// const newMenu = [...restaurant.mainMenu, `gnocci`];
// //console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// //console.log(menu);

// const str = `Jonas`;
// const letters = [...str, ``, `S.`];
// //console.log(letters[4]);
// //      //Real world example
// //const ingredients = [
// //   prompt(`Let's make pasta! Ingridient 1?`),
// //   prompt(`Let's make pasta! Ingridient 2?`),
// //   prompt(`Let's make pasta! Ingridient 3?`),
// // ];
// //console.log(ingredients);
// ///restaurant.orderPasta(...ingredients);

// //      //Object
// const newRestaurant = {
//   foundedIn: 1990,
//   ...restaurant,
//   name: `Love Mario`,
//   founder: `Guiseppe`,
// };

// const restaurantCopy = {
//   ...restaurant,
// };
// restaurantCopy.name = `Love Mario`;

//    //106. Rest Pattern and Parameters

//const arr = [1, 2, ...[3, 4]]; //spread
//const [a, b, ...others] = [1, 2, 3, 4, 5]; // rest

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// //object
// const { sat, ...weekdays } = restaurant.openingHours;
// //    //function
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 6, 3, 2, 5, 6);

// const x = [33, 6, 7];
// console.log(...x);
// add(...x);

// restaurant.orderPizza(`pies`, `kot`, `spaghetti`);
// //    //107. Short Circuiting (&& and ||)

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ?? restaurant.numGuests : 10;

// const guests = restaurant.numGuests || 10;
// // //&&
// console.log(0 && 'marek');
// console.log(7 && 'marek');

// restaurant.orderPizza
//   ? restaurant.orderPizza(`pies`, `kot`)
//   : console.log(`nope`);

// restaurant.orderPizza && restaurant.orderPizza(`pies`, `mial`);
// //108. The Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;
// const guests3 = restaurant.numGuests ?? 11;
// console.log(`wynik tabeli to ${guests3}`);

// //      //110. Coding Challenge #1
// const game = {
//   team1: `Bayern Munich`,
//   team2: `Borrussia Dortmund`,
//   players: [
//     [
//       `Neuer`,
//       `Pavard`,
//       `Matrinez`,
//       `Alaba`,
//       `Davies`,
//       `Kimmichi`,
//       `Gortzka`,
//       `Coman`,
//       `Muller`,
//       `Gnarby`,
//       `Lewandowski`,
//     ],
//     [
//       `Burki`,
//       `Schulz`,
//       `Hummels`,
//       `Akanji`,
//       `Hakimi`,
//       `Weigl`,
//       `Witsel`,
//       `Hazard`,
//       `Brandt`,
//       `Sancho`,
//       `Gotze`,
//     ],
//   ],
//   score: `4:0`,
//   scored: [`Lewandowski`, `Gnardl`, `Lewandowski`, `Hummels`],
//   date: `Now 9th, 2023`,
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const players1 = game.players[0];
// const players2 = game.players[1];

// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// const allplayers = [...players1, ...players2];

// const players1Final = [...players1, `Thiago`, `Coutinho`, `Persic`];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// //z6
// const printGoals = function (...players) {
//   console.log(`${players.length} scored  goals by ${players}!`);
// };
// printGoals(...game.scored);
// //z7
// team1 < team2 && console.log('Team 1 in more likely to win');
// team1 > team2 && console.log('Team 2 in more likely to win');

//         //113
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //with optiona chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// const wkdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

// for (const day of wkdays) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we are open at ${open}`);
// }
// //methods
// console.log(restaurant.order?.(0, 1) ?? `Method do not exist`);
// console.log(restaurant.orderrissoto?.(0, 1) ?? `Method do not exist`);
// //array
// const users = [{ name: `Jonas`, email: `pieski@fe.com` }];
// console.log(users[0]?.name ?? `Empty`);

//        //114. Looping Objects: Object Keys, Values, and Entries

// const keyObject = Object.keys(restaurant.openingHours);
// console.log(keyObject);
// let OpenStr = `We are open on ${keyObject.length} days:`;

// for (const day of keyObject) {
//   OpenStr += `${day}, `;
// }
// console.log(OpenStr + `.`);
// //values
// const values = Object.values(openingHours);
// console.log(values);

// //enteries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries)
//   console.log(`On ${key} we are opened at ${open} and closed at ${close}`);
//koniec 114

//          //115. Coding Challenge #2
// const game = {
//   team1: `Bayern Munich`,
//   team2: `Borrussia Dortmund`,
//   players: [
//     [
//       `Neuer`,
//       `Pavard`,
//       `Matrinez`,
//       `Alaba`,
//       `Davies`,
//       `Kimmichi`,
//       `Gortzka`,
//       `Coman`,
//       `Muller`,
//       `Gnarby`,
//       `Lewandowski`,
//     ],
//     [
//       `Burki`,
//       `Schulz`,
//       `Hummels`,
//       `Akanji`,
//       `Hakimi`,
//       `Weigl`,
//       `Witsel`,
//       `Hazard`,
//       `Brandt`,
//       `Sancho`,
//       `Gotze`,
//     ],
//   ],
//   score: `4:0`,
//   scored: [`Lewandowski`, `Gnardl`, `Lewandowski`, `Hummels`],
//   date: `Now 9th, 2023`,
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //ex1
// for (const [key, goal] of game.scored.entries())
//   console.log(`Goal nr ${key + 1} is scored by ${goal}.`);
// //ex2
// const gameValues = Object.values(game.odds);
// //console.log(gameValues);
// let wynik = 0;
// for (const goal of gameValues) {
//   wynik = wynik + goal;
// }
// console.log(`Our avrage odd value is ${wynik / 3}`);
// //ex3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Vistory ${game[team]}`;
//   console.log(`odd of ${teamStr} ${odd}`);
// }
//koniec 115

//      //116 sets
// const orderSet = new Set([`Pasta`, `Pizza`, `Pizza`, `Rissoto`]);
// console.log(orderSet);

// console.log(new Set(`Marek`));

// console.log(orderSet.size);
// console.log(orderSet.has(`Pizza`));
// orderSet.add('Bread');
// orderSet.delete(`Rissoto`);
// for (const order of orderSet) console.log(order);

// const staff = [`Waiter`, `chef`, `Waiter`, `Manager`];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

//             //120. Coding Challenge #3
// const gameEvent = new Map([
//   [17, `Goal`],
//   [36, `Substitution`],
//   [47, `Goal`],
//   [61, `Substitution`],
//   [64, `Yellow Card`],
//   [69, `Red Card`],
//   [70, `Substitution`],
//   [72, `Substitution`],
//   [36, `Substitution`],
//   [76, `Goal`],
//   [80, `Goal`],
//   [92, `Yellow Card`],
// ]);
// console.log(gameEvent);
// //ex1
// let eventsSet = new Set([...gameEvent.values()]);
// let events = [...eventsSet];
// console.log(events);
// //ex2
// gameEvent.delete(64);
// console.log(gameEvent);
// //ex4
// for (const [key, val] of gameEvent) {
//   key < 45
//     ? console.log(`First Half ${key}: ${val}`)
//     : console.log(`Second Half ${key}: ${val}`);
//}

//121. Working With Strings - Part 1
// const airline = `TAP AIR Poland`;
// const plane = `A320`;
// console.log(`B737`.indexOf(`3`));
// console.log(airline.slice(4));

// console.log(airline.slice(0, airline.indexOf(' ')));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);

//   s === `b` || s === `e` ? console.log(`Middle`) : console.log(`not`);
// };
// checkMiddleSeat(`11b`);
// checkMiddleSeat(`11e`);
// checkMiddleSeat(`11g`);

//123. Working With Strings - Part 3
// const stringArray = 'a+very+nice+dog'.split(`+`);

// const [firstName, LastName] = `Marek Krzyzowski`.split(` `);
// const newName = [[`Mr.`, firstName].join(``), LastName.toUpperCase()].join(` `);

// const capitalName = function (name) {
//   const newString = name.split(` `);
//   const newStringUpper = [];
//   for (const n of newString) {
//     newStringUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(newStringUpper.join(` `));
// };
// console.log(capitalName(`Marek krzyzowski`));
// //padding
// console.log(`Marek`.padEnd(11, `:)`));
// //masking credit card
// const maskCard = function (cardNumber) {
//   const splitedCardNumber = cardNumber.slice(-4).padStart(16, `*`);
//   console.log(splitedCardNumber);
// };
// const cardNumber = `1234 4567 7894 1278`;
// console.log(maskCard(cardNumber));
//      //124. Coding Challenge #4//moje

// const editedText = function (text) {
//   //
//   const splited = text.split(`_`);
//   let [firstWord, SecondWord] = splited;

//   SecondWord = SecondWord[0].toUpperCase() + SecondWord.slice(1);
//   const final = firstWord + SecondWord;

//   console.log(final.padEnd(20, ' ') + `👌`);
// };
// console.log(editedText('kocham_pieseczki'));

//jonas//do powtórzenia
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener(`click`, function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const row of rows) {
//     const [first, second] = row.toLowerCase().trim().split(`_`);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output.padEnd(15, ` `) + `ok`);
//   }
// });
