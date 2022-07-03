"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 12;
// document.querySelector(".score").textContent = 34;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(".number").textContent = secretNumber; // zmiana ? na wylosowaną liczbę
let score = 20;
let highscore = 0;
function displayMessage(message){
    document.querySelector(".message").textContent = message; 
}

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //document.querySelector(".message").textContent = "Correct!";
  console.log(guess, typeof guess);
  if (!guess) {
    //no value or value = 0
    //document.querySelector(".message").textContent = "Put a value";
    displayMessage("Put a value!");
  } else if (guess === secretNumber) {
    //when player win a game
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //CSS BODY CHANGE
    document.querySelector("body").style.backgroundColor = "limegreen";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess !== secretNumber) {
    //when guess is wrong
    if (score > 0) {
      //guess it to high
      document.querySelector(".message").textContent =
        guess > secretNumber ? "To high!" : "To low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose a game";
    }
  }
  //    else if (guess > secretNumber) {
  //     if (score > 0) {
  //       //guess it to high
  //       document.querySelector(".message").textContent = "To high!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lose a game";
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 0) {
  //       //guess is to low
  //       document.querySelector(".message").textContent = "To low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lose a game";
  //     }
  //   }
});
