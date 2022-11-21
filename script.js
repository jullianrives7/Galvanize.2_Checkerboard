// BUTTONS DIV //
let buttonsDiv = document.createElement("div");
buttonsDiv.style.display = "grid";
buttonsDiv.style.gridAutoFlow = "column";
document.body.prepend(buttonsDiv);
// MAIN CONTENT DIV //
let main = document.createElement("main");
document.body.appendChild(main);
// RED & BLACK CHECKERS BUTTON //
let redBlackCheckersButton = document.createElement("button");
redBlackCheckersButton.innerHTML = "Red & Black Checkers";
redBlackCheckersButton.className = "red-black-btn";
buttonsDiv.appendChild(redBlackCheckersButton);
let redBlackBtn = document.querySelector(".red-black-btn");
// RED & BLACK GRADIENT CHECKERS BUTTON //
let redBlackGradientCheckersButton = document.createElement("button");
redBlackGradientCheckersButton.innerHTML = "Red & Black Gradient Checkers";
redBlackGradientCheckersButton.className = "rb-gradient-btn";
buttonsDiv.appendChild(redBlackGradientCheckersButton);
let redBlackGradientBtn = document.querySelector(".rb-gradient-btn");
// RANDOMLY COLORED CHECKERS BUTTON //
let randomColorsCheckersButton = document.createElement("button");
randomColorsCheckersButton.innerHTML = "Randomly Colored Checkers";
randomColorsCheckersButton.className = "random-colors-btn";
buttonsDiv.appendChild(randomColorsCheckersButton);
let randomBtn = document.querySelector(".random-colors-btn");
// RANDOM GRADIENT CHECKERS BUTTON //
let randomGradientCheckersButton = document.createElement("button");
randomGradientCheckersButton.innerHTML = "Random Gradient Checkers";
randomGradientCheckersButton.className = "random-gradient-btn";
buttonsDiv.appendChild(randomGradientCheckersButton);
let randomGradientBtn = document.querySelector(".random-gradient-btn");
// FLASHING CHECKERS BUTTON //
let flashingCheckersButton = document.createElement("button");
flashingCheckersButton.innerHTML = "Flashing Checkers";
flashingCheckersButton.className = "flashing-btn";
buttonsDiv.appendChild(flashingCheckersButton);
let flashingBtn = document.querySelector(".flashing-btn");

//------------ DEFAULT HOME TO RED & BLACK CHECKERS -------------//
window.addEventListener("DOMContentLoaded", function () {
  redBlackBtn.click();
});

//-------------------- RED & BLACK CHECKERS ---------------------//

redBlackBtn.addEventListener("click", function () {
  console.log("red & black button clicked");
  clearInterval(flashingColors);
  while (main.firstChild) {
    main.removeChild(main.childNodes[0]);
  }
  for (let i = 0; i < 81; i++) {
    i % 2 === 0 ? block("red") : block("black");
  }
});

//---------------- RED & BLACK GRADIENT CHECKERS ---------------//

redBlackGradientBtn.addEventListener("click", function () {
  console.log("red & black gradient button clicked");
  clearInterval(flashingColors);
  while (main.firstChild) {
    main.removeChild(main.childNodes[0]);
  }
  colorSlider = 0;
  for (let i = 0; i < 81; i++) {
    i % 2 === 0 ? gradientRedBlock() : gradientBlackBlock();
  }
});

//------------------ RANDOMLY COLORED CHECKERS ------------------//

randomBtn.addEventListener("click", function () {
  console.log("random button clicked");
  while (main.firstChild) {
    main.removeChild(main.childNodes[0]);
  }
  for (let i = 0; i < 81; i++) {
    block(randomColor());
  }
});

//------------------- RANDOM GRADIENT CHECKERS ------------------//

randomGradientBtn.addEventListener("click", function () {
  console.log("random gradient button clicked");
  clearInterval(flashingColors);
  while (main.firstChild) {
    main.removeChild(main.childNodes[0]);
  }
  for (let i = 0; i < 81; i++) {
    randomGradientBlock(randomColor(), randomColor());
  }
});

//---------------------- FLASHING CHECKERS ---------------------//

flashingBtn.addEventListener("click", function () {
  console.log("flashing button clicked");
  while (main.firstChild) {
    main.removeChild(main.childNodes[0]);
  }
  // flashingBtn.addEventListener("toggle", ev)
  clickRandomBtn();
  flashingColors = setInterval(clickRandomBtn, 500);
  flashingBtn.innerHTML = "ESC Key to Stop Flashing";
});

//STOP FLASHING ON ESCAPE KEY
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    console.log("escape key pressed to stop flashing colors");
    clearInterval(flashingColors);
    flashingBtn.innerHTML = "Flashing Checkers";
  }
});

//---------------------- FUNCTIONS/METHODS ---------------------//

function block(color) {
  let div = document.createElement("div");
  div.style.backgroundColor = color;
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  main.appendChild(div);
}

function randomColor() {
  let red = randomIntBetweenMinAndMax(0, 255);
  let green = randomIntBetweenMinAndMax(0, 255);
  let blue = randomIntBetweenMinAndMax(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function randomIntBetweenMinAndMax(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomGradientBlock(color1, color2) {
  let div = document.createElement("div");
  div.style.background = `linear-gradient(145deg, ${color1} 0%, ${color2} 100%)`;
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  main.appendChild(div);
}

let colorSlider = 0;
// red start rgb(255,0,0), red end rbg(255,240,240)
// black start rgb(0,0,0), black end(234,234,234)

function gradientRedBlock() {
  let div = document.createElement("div");
  div.style.backgroundColor = `rgb(255, ${colorSlider}, ${colorSlider})`;
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  main.appendChild(div);
}

function gradientBlackBlock() {
  let div = document.createElement("div");
  div.style.backgroundColor = `rgb(${colorSlider}, ${colorSlider}, ${colorSlider})`;
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  main.appendChild(div);
  colorSlider += 6;
}

function clickRandomBtn() {
  randomBtn.click();
}

let flashingColors;
