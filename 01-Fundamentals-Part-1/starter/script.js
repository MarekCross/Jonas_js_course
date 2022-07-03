// let js = 'amazing';
// console.log(40+10-11);
// console.log(23);

// let firstName = "Marek";
// console.log(firstName);

// let mojaPierwszaPraca = "marketing";
// let mojaWymarzonaPraca = "IT";
// console.log(mojaPierwszaPraca);
// console.log(mojaWymarzonaPraca);

// 


// console.log(continent, country,population);

// let jsIsFun = true;

// console.log(typeof true);
// console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof "tekst");

// jsIsFun = 'Yes';
// console.log(jsIsFun);

// let years;
// console.log(years);
// console.log(typeof years);
// years = 22;
// console.log(years);
// console.log(typeof years);

// console.log(typeof null);

// let isIsland = false;
// let language;
// console.log(isIsland, population,country,language);

// let age =33;
// age = 22;

// const year = 1991;
// year = 4444; no tak nie można 

// const now = 2022;
// const ageMarek = now - 1999;
// const ageSara = now - 2008;
// const isPelnoletnia = (ageSara >= 18);
// // console.log(ageMarek ,ageSara);
// // console.log(ageMarek * 2, ageSara/2);
// // console.log(2**3);


// const firstName = 'Marek';
// const lastName = 'Krzyzowski';
// console.log(firstName+" "+lastName);

// let x = 10 + 2;
// x+=10;

// const now = 2022;
// const ageMarek = now - 1999;
// const ageSara = now - 2002;
// console.log(now - 1999 > now - 2002);

// const averageAge = (ageMarek + ageSara) / 2; 
// console.log(ageMarek , ageSara);






//CODING CHALLENGE #1

// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 70;
// const johnHeight = 1.95;

// const markBmi = markWeight / markHeight ** 2;
// const johnBmi = johnWeight / johnHeight ** 2;

// console.log("Mark="+markBmi+" "+"John="+johnBmi);

// if (markBmi >= johnBmi) console.log("Mark have height BMI"); else  console.log("John have height BMI");





// STRINGS

// const firstName = 'Marek';
// const job = 'Front-end Dev';
// const birthYear = 1999;
// const year = 2023
// const marek = "Jestem " + firstName + ", " +(year - birthYear)+"-letni "+job+".";
// console.log(marek);




//template literals

// const newMarek = `Jestem ${firstName}, ${year - birthYear}-letni ${job} `;
// console.log(newMarek);
// console.log(`string\n\with\n\many\n\lines.`)


// IF ELSE
// const age=15;
// if(age >= 18){
// console.log(`Sara can start driving lessons👏`);
// }else{
// const yearsLeft = 18 - age;
// console.log(`Sara is to young, wait another ${yearsLeft}.`);
// }
// const birthYear = 2099;
// let century;
// if(birthYear <= 2000){
//      century = 20;
// }else{
//      century = 21;
// }
// console.log(century);




//CODING CHALLENGE #2

// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 120;
// const johnHeight = 1.95;

// const markBmi = markWeight / markHeight ** 2;
// const johnBmi = johnWeight / johnHeight ** 2;
// console.log(`Mark's BMI: ${markBmi}, John's BMI: ${johnBmi}`);

// if(markBmi > johnBmi){
//     console.log(`Mark have higher BMI.`);
// }else{
//     console.log(`John have higher BMI.`);
// }




//Type Conversion 

// const inputYear = `1999`;
// console.log(Number(inputYear) + 22);
// console.log(Number('Marek'));
// console.log(String(12));

//Type  Coercion
// console.log(`I'm ` + 23 + ` years old`);
// console.log(`23` * `10` -3);

// let n= `1`+ 1;
// n=n-1;
// console.log(n);

//21. Truthy and Falsy Values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(`string`));
// console.log(Boolean({}));

// const money = 100;
// if(money){
//     console.log(`Don't spend it all.`);
// }else{
//     console.log(`Try to save more.`);
// }
// let height;
// if(height){
//     console.log(`YEY it is definded`);
// }else{
//     console.log(`Nope it is undefinded`);

// }

//
//22. Equality Operators: == vs. ===

// const age = 18; 
// if(age===18) console.log(`adult`);

// const kochaPieski = Number(prompt(`Jak bardzo kochasz pieski, podaj liczbe?`));
// console.log(kochaPieski);

// if (kochaPieski === 23) 
// {console.log(`23 is cool number!`);}
// else 
// if (kochaPieski ===7) {console.log(`it is cool number!`);}
// else
// { console.log(`Number is not 23 or 7 :(`);}

// if (kochaPieski !== 23) console.log("Czemu nie 23");

//23. Boolean Logic
//24. Logical Operators
// const hasDriverLicence = true; //A
// const haveGoodVision = true;  //B
// console.log(hasDriverLicence && haveGoodVision);
// console.log(hasDriverLicence || haveGoodVision);
// console.log(!hasDriverLicence);
// const shouldDrive = hasDriverLicence && haveGoodVision;
// if(shouldDrive){
//     console.log(`Sara can drive`);
// }else{
// console.log(`It is time for bus`);
// }
// const isTired = false;
// console.log(hasDriverLicence && haveGoodVision && isTired);

// if(hasDriverLicence && haveGoodVision && !isTired){
//     console.log(`Sara can drive`);
// }else{
// console.log(`It is time for bus`);
// }

// 25. Coding Challenge #3

// averageDolphins = (97+112+100)/3;
// averageKoalas = (109+95+90)/3;
// console.log(`Dolphin ${averageDolphins}, Koalas ${averageKoalas}`);

// if(averageDolphins>averageKoalas && averageDolphins>=100){
//     console.log(`Dolphin wins!`);
// }else if(averageDolphins<averageKoalas && averageKoalas>=100){
//     console.log(`Koalas wins!`);
// }else if (averageDolphins === averageKoalas  && averageKoalas>100 && averageDolphins>100){
//     console.log(`It is a draw`);
// }else{console.log(`no one get 100 points`)}

// 26. The switch Statement
