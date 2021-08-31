"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelectorAll("audio").forEach((sound) => {
    sound.volume = 0.1;
  });
  document.querySelector("#typespace").volume = 0.7;

  document.querySelector("#start").addEventListener("click", init);

  document.querySelectorAll(".typewritten").forEach((typewritten) => {
    stringArray.push(typewritten.textContent);
  });
});

let stringArray = [];
let stringCounter = 1;
let currentString;
let currentLength;
let currentIndex;
let delayRNG;

function init() {
  //Reset currentIndex and stringCounter
  stringCounter = 1;
  currentString = stringArray[stringCounter - 1];
  currentLength = stringArray[stringCounter - 1].length;
  currentIndex = 0;
  //Save strings and empty typewriter
  document.querySelectorAll(".typewritten").forEach((typewritten) => {
    typewritten.textContent = "";
  });

  //Run loop;
  loop();
}

function loop() {
  //Run only if current is less than total amount of characters
  if (currentIndex < currentLength) {
    //Insert current character
    document.querySelector(
      `.typewritten:nth-child(${stringCounter})`
    ).textContent += stringArray[stringCounter - 1][currentIndex];

    //Proceed to next character in the string
    currentIndex++;

    //Play audio
    if (currentString[currentIndex] === " ") {
      console.log("space sound");
      document.querySelector("#typespace").play();
    } else if (
      currentString[currentIndex - 1] === " " ||
      currentString[currentIndex] === "0"
    ) {
      console.log("1 sound");
      document.querySelector("#typekey1").play();
    } else {
      console.log("2 sound");
      document.querySelector("#typekey2").play();
    }

    //Randomly delay next character
    delayRNG = Math.floor(Math.random() * 2);
    if (delayRNG === 0) {
      setTimeout(loop, 50);
    } else if (delayRNG === 1) {
      setTimeout(loop, 100);
    }
  } else if (stringCounter < stringArray.length) {
    //Play sound
    document.querySelector("#typereturn").play();
    //Increase stringCounter
    stringCounter++;
    //Change currentString and currentLength
    currentString = stringArray[stringCounter - 1];
    currentLength = stringArray[stringCounter - 1].length;
    //Reset currentIndex
    currentIndex = 0;
    //Restart loop;
    setTimeout(loop, 1500);
    console.log(stringCounter, currentString, currentLength, currentIndex);
  }
}
