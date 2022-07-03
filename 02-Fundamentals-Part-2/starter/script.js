'use strict';

// let hasLicense = false;
// const passTest = true;

// if(passTest) haLicense = true; 
// if(hasLicense) console. log(`i can drive`);
////
//33. Functions
// function logger(){
//     console.log(`Jestem Marek.`);
// }
// logger();

// function fruitProcessor (applesNumber, orangeNumber){
//     console.log(applesNumber, orangeNumber);
//     const juice = `Juice with ${applesNumber} apples and ${orangeNumber} oranges.`;
//     // return juice;
//     console.log(juice);
//     return juice;
// }
// const appleJuice = fruitProcessor(3, 5);
// console.log(appleJuice);


// 34. Function Declarations vs. Expressions
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// console.log(calcAge1(1999));

// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }


// 35. Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1999);

// const yearsToRetirement = (birthYear, firstName) => {
//     const age=2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsToRetirement(1999, 'Marek'));

//36. Functions Calling Other Functions
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor (apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice is made of of ${applePieces} apples and ${orangePieces} oranges.`
//     return juice;
// }
// console.log(fruitProcessor(2,3));

//37. Reviewing Functions
// const calcAge = function(birthYear){
//     return 2022 - birthYear;
// }

// const yearsToRetirement = function (birthYear, firstName)  {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
    
//     if(retirement>0){
//         // return retirement;
//         return console.log(`${firstName} retires in ${retirement} years.`);
//     }else{ 
//         // return -1;
//         return console.log(`${firstName} already retired!`)
//     }
    
// }
// console.log(yearsToRetirement(1950, 'Mike'));

//38 Coding Challenge

// function clacAverage(score1, score2, score3){
//     const average = (score1 + score2 +score3 )/3;
//     return average;
// }

// const dolphinsAverage = clacAverage(80,54,71);
// console.log(dolphinsAverage);

// const koalasAverage = clacAverage(90,54,41);
// console.log(koalasAverage);

// function checkWinner (dolphinsAverage, koalasAverage){
//     if(koalasAverage>=2*dolphinsAverage){
//         return console.log(`koalas wins (${koalasAverage} vs ${dolphinsAverage})`)
//     }else if(dolphinsAverage>=2*koalasAverage)
//     {return console.log(`dolpfins wins (${dolphinsAverage} vs ${koalasAverage})`)} else{
//         console.log(`no one wins`);
//     }
// }
// console.log(checkWinner(dolphinsAverage, koalasAverage));



// 39. Introduction to Arrays

// const friends = ['Michał',`Kacper`, `Janek`];
// const years1 = new Array(1999,2000,2001,2002);

// console.log(friends[0], friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);
// friends[2] = 'Tomasz';

// const firstName = `Marek`;
// const marek = [firstName, `Krzyzowski`, 2077-1999, friends];

// const calcAge = function (birthYear){
//     return 2077 - birthYear;
// }
// const years = [1999,1989,2002,2018,2022];

// const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length-1])];

// const age1 = calcAge(years[0]);

//40. Basic Array Operations (Methods)

// const friends = ['Michał',`Kacper`,`Janek`];
// console.log(friends);


// const newLenght = friends.push(`Jay`);
// console.log(friends);


// friends.unshift(`john`);
// console.log(friends);

// const pop = friends.pop();
// console.log(pop);

//41. Coding Challenge #2

// function calcTips(bills){
//     if(bills>=50 && bills<=300){
//         return bills = bills * 0.15;
//     }else{
//         return bills = bills * 0.2;
//     }
// }
// const bills = [125, 555, 44];
// const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
// const total = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];
// console.log(`Bills are ${bills}, tips are ${tips}, and total is ${total}.`);
//42. Introduction to Objects

// const marekarray = [`Marek`, `Krzyzowski`, 1999,`future programmer`,[`Tomek`, `Kasia`, `Marcin`]];

// const marek ={
//     firstName:`Marek`,
//     lastName: `Krzyzowski`,
//     age: 1999,
//     job: `programmer`,
//     friends: [`Tomek`, `Kasia`, `Marcin`]
// }
//43. Dot vs. Bracket Notation diałamy na kodzie z 42
// console.log(marek[`lastName`]);
// console.log(marek.lastName);

// const nameKey =`Name`;
// console.log(marek[`first`+nameKey]);

// const interestedIN = prompt(`Co chcesz wiedzieć o Marku? `);


// if(marek[interestedIN]){    //ta wartość jest truthy czyli może przyjąć true lub false więcej w zależności czy wartość istnieje dostaniemy taki napis
//      console.log(marek[interestedIN]);
// }else{
//  console.log(`No value.`);
// }

// marek.location = `Katowice`;
// marek[`instagram`]= `markcross`;

// //challenge
// console.log(marek.firstName+` have `+marek.friends.length+` firends and his best friend is `+marek.friends[0]);

//44. Object Methods

// const marek ={
//         firstName:`Marek`,
//         lastName: `Krzyzowski`,
//         birthYear: 1999,
//         job: `programmer`,
//         friends: [`Tomek`, `Kasia`, `Marcin`],
//         hasDriverLicense: true,

        // calcAge: function(birthYear){ 1 wersja
        //     return 2077-birthYear;
        // }

        // calcAge: function(){       2 wersja z this
        //     return 2077-this.birthYear;
        // }

        // calcAge: function(){
        //     this.age =  2022-this.birthYear;
        //     return this.age;
        // },
        // getSummary: function(){
        //     return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driving license.`
        // }
    //}
    //   console.log(marek[`calcAge`](1999));
    // console.log(marek.calcAge(marek.age));
    // console.log(marek.calcAge());

    // console.log(marek.age);
    // //44 challenge
    // console.log(marek.getSummary());


   // 45. Coding Challenge #3

//    const mark ={
//        fullName: `Mark Miller`,
//        mass: 78,
//        height: 169,
//        calcBMI: function(){
//            this.bmi= this.mass / this.height*2;
//            return this.bmi;
//        }
//    }
//   const markBmi = mark.calcBMI();
//   console.log(markBmi);

//    const john ={
//        fullName: `John Smith`,
//        mass: 92,
//        height: 300,
//        calcBMI: function(){
//         this.bmi= this.mass / this.height*2;
//         return this.bmi;
//     }
//    }
//    const johnBMI = john.calcBMI();
//    console.log(johnBMI);

//    johnBMI > markBmi ? console.log(`john have bigger bmi: ${johnBMI}`) : console.log(`mark have bigger bmi: ${markBmi}`);

            //46. Iteration: The for Loop
//for(let początkowa wartość licznika;warunek logiczny oceniany przed każdą inicjacją pętli; jak ma się zupdateować po każdej pętli)

// for(let rep = 1;rep <= 10;rep++){
//     console.log(`Lifting weight repetition ${rep}`);
// }
             //47. Looping Arrays, Breaking and Continuing
// const marekArray = [
//     `Marek`,
//     `Krzyzowski`,
//     1999,
//     `programmer`,
//     [`Tomek`,`Kasia`,`Kamil`]
// ];
// const types = [];
// for(let i = 0; i <= marekArray.length-1; i++){
//     console.log(marekArray[i]);

//     // types[i]= typeof marekArray[i];
//     // console.log(types[i]);

//     types.push(typeof marekArray[i]);
// }
// const years =[1999,2002,2077,1989];
// const ages = [];
// for(let i = 0; i <=years.length-1;i++){
//     ages.push(2077-years[i]);
    
// }
                //continue  
// for(let i=0;i<marekArray.length;i++){
//     if(typeof marekArray[i] !== `string`) continue;
//     console.log(marekArray[i], typeof marekArray[i]);
//     types.push(typeof marekArray[i]);
// }
           //break
// for(let i=0;i<marekArray.length;i++){
//     if(typeof marekArray[i] === `number`) break;
//     console.log(marekArray[i], typeof marekArray[i]);
//     types.push(typeof marekArray[i]);
// }

              //48. Looping Backwards and Loops in Loops
// const marekArray = [
// `Marek`,
// `Krzyzowski`,
// 1999,
// `programmer`,
// [`Tomek`,`Kasia`,`Kamil`]
// ];
// //looping backwards
// for(let i = marekArray.length-1; i>-1;i--){
//     console.log(i, marekArray[i]);
// }

// //loops in loops
// for(let exercise = 1; exercise < 4;exercise++){
//     for(let repetition =1; repetition<6;repetition++ ){
//         console.log(`Repetition ${repetition} of Exercise ${exercise}`);
//     }
//     console.log(`Next exercise`);
// }

              //49. The while Loop
// for(let rep = 0; rep <= 10; rep++){
//     console.log(`Lifting weigth repetition ${rep}`);
// }
// let rep =1;
// while(rep<=10){
//     console.log(`Lifting weigth repetition ${rep}`);
//     rep++;
// }
//rool the dice
// let dice;
// while (dice !== 6){
//     dice = Math.trunc(Math.random()*6)+1;
//     console.log(`You rolled a ${dice}`);

  // if (dice === 6){console.log(`you rolled 6`);}
// }
                        //50. Coding Challenge #4

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

function calcTips(bills){
    if(bills>=50 && bills<=300){
           return bills = bills * 0.15;
       }else{
           return bills = bills * 0.2;
       }
    }

for(let i = 0; i < bills.length; i++){
        tips.push(calcTips(bills[i]));
        totals.push(tips[i]+bills[i]);
}

console.log(tips);
console.log(totals);
//BONUS
let sum = 0;
function calcAverage(arr){
    for(let i=0; i<arr.length ;i++){
        sum = sum + arr[i];
    }
    sum= sum/arr.length;
    return sum;
}
let calc = calcAverage(bills);
console.log(calc);