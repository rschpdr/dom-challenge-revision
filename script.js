const possibleColors = ['lightsalmon', 'lightgray', 'khaki', 'lightskyblue'];
const possibleGradients = [
  'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)',
  'radial-gradient(circle, rgba(232,0,55,1) 0%, rgba(255,166,0,1) 100%)',
  'linear-gradient(90deg, rgba(0,215,232,1) 0%, rgba(0,255,21,1) 100%)',
  'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)',
];
const container = document.querySelector('#colorful-container');
const input = document.querySelector('#name-input');
const name = document.querySelector('#name');
const counter = document.querySelector('.counter');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const colorChangeBtn = document.querySelector('#change-color');
const colorChangeGradientBtn = document.querySelector('#change-color-gradient');

let currentName = '';
let currentCount = 0;

function changeBackgroundColor(color) {
  container.style = `background-color: ${color};`;
}

function changeBackgroundToGradient(gradient) {
  container.style = `background: ${gradient};`;
}

window.addEventListener('load', () => {
  changeBackgroundColor(possibleColors[0]);
});

input.addEventListener('keyup', (event) => {
  currentName = event.target.value;
  return (name.innerText = currentName);
});

incrementBtn.addEventListener('click', (event) => {
  ++currentCount;
  return (counter.innerText = currentCount);
});

decrementBtn.addEventListener('click', (event) => {
  if (currentCount > 0) {
    --currentCount;
  }
  return (counter.innerText = currentCount);
});

colorChangeBtn.addEventListener('click', (event) => {
  const randomNumber = Math.floor(Math.random() * possibleColors.length);

  return changeBackgroundColor(possibleColors[randomNumber]);
});

colorChangeGradientBtn.addEventListener('click', (event) => {
  const randomNumber = Math.floor(Math.random() * possibleColors.length);

  return changeBackgroundToGradient(possibleGradients[randomNumber]);
});
