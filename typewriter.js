"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  init();
});

const string = document.querySelector(".typewritten").textContent;
const stringLength = document.querySelector(".typewritten").textContent.length;
let currentIndex = 0;

function init() {
  //Empty the typewriter
  document.querySelector(".typewritten").textContent = "";
  loop();
}

function loop() {
  //Run only if current is less than total amount of characters
  if (currentIndex < stringLength) {
    //Insert current character
    document.querySelector(".typewritten").textContent += string[currentIndex];

    //Proceed to next character in the string
    currentIndex++;

    //

    //Randomly delay next character
    let RNG = Math.floor(Math.random() * 3);
    if (RNG === 0) {
      setTimeout(loop, 100);
    } else if (RNG === 1) {
      setTimeout(loop, 200);
    } else if (RNG === 2) {
      setTimeout(loop, 300);
    }
  }
}
