// Your JS goes here

function randomIntBetweenMinAndMax(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  let red = randomIntBetweenMinAndMax(0, 255);
  let green = randomIntBetweenMinAndMax(0, 255);
  let blue = randomIntBetweenMinAndMax(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

console.log(randomColor());

function block(color) {
  let div = document.createElement("div");
  var color = randomColor();
  div.style.backgroundColor = color;
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  document.body.appendChild(div);
}

for (let i = 0; i < 89; i++) {
  i % 2 === 0 ? block(randomColor()) : block(randomColor());
}

block(randomColor());
