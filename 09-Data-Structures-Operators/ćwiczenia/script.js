'use strict';
const [one, ...two] = [2, 4, 6];
const sportbar = {
  name: `Dog's best bar`,
  workers: 12,
  Location: `15th street ave, Brooklyn`,
  hours: {},
};

const opened = ``;
const closed = ``;
sportbar.hours = { opened: `13`, closed: `24` };
const { name: miejsce, ...informacje } = sportbar;

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const imie = `Marek`;
console.log(...imie);
console.log(imie);

let numberssss = function (Marek) {
  for (let i = 0; i < Marek.length; i++) {
    console.log(Marek[i]);
  }
};
console.log(numberssss(arr2));

const lokalizacjaBaru = sportbar.Location ?? false ?? `lol`;
