const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonCoffee = document.querySelector('.coffee');
const buttonFirePlace = document.querySelector('.fireplace');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const toggleModeButton = document.getElementById('toggleMode');
let volumeForest = document.getElementById('volumeControlForest');
let volumeRain = document.getElementById('volumeControlRain');
let volumeCoffee = document.getElementById('volumeControlcoffee');
let volumeFirePlace = document.getElementById('volumeControlFireplace');

let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);

let pathForest = document.getElementById('pathForest');

let pathRain = document.getElementById('pathRain');

let pathCoffee = document.getElementById('pathCoffee');

let pathFirePlace = document.getElementById('pathFirePlace');

const soundForest = new Audio("./Songs/Floresta.wav");
const soundRain = new Audio("./Songs/Chuva.wav");
const soundCoffee = new Audio("./Songs/Cafeteria.wav");
const soundFirePlace = new Audio("./Songs/Lareira.wav");
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

soundForest.loop = true;
soundRain.loop = true;
soundCoffee.loop = true;
soundFirePlace.loop = true;

let a = 0;
let b = 0;
let c = 0;
let d = 0;
function cardReset(){
  buttonForest.classList.remove('active-card');
  buttonRain.classList.remove('active-card');
  buttonCoffee.classList.remove('active-card');
  buttonFirePlace.classList.remove('active-card');
  
  soundForest.pause();
  soundRain.pause();
  soundCoffee.pause();
  soundFirePlace.pause();
  a = 0;
  b = 0;
  c = 0;
  d = 0;
};

function updateDisplay(newMinutes, newSeconds) {
  minutesDisplay.textContent = String(newMinutes).padStart(2,"0");
  secondsDisplay.textContent = String(newSeconds).padStart(2,"0");
};

function countdonw(){
    timerTimeOut = setTimeout(() => {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    if(minutes <= 0 && seconds <= 0){
      updateDisplay(minutes,seconds);
      reset();
      return;
    };

    if(seconds <= 0){
      seconds = 60;
      --minutes;
    };

    updateDisplay(minutes,--seconds)
    countdonw();
  }, 1000);
};

function hold(){
  clearTimeout(timerTimeOut);
};

function reset(){
  hold();
  updateDisplay(minutes,0);
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonPlus.classList.remove('hide');
  buttonMinus.classList.remove('hide');
  cardReset();
};

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonPlus.classList.add('hide');
  buttonMinus.classList.add('hide');
  countdonw();
  buttonPressAudio.play();
});

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  clearTimeout(timerTimeOut);
  buttonPressAudio.play();
});

buttonStop.addEventListener('click', () => {
  reset();
  buttonPressAudio.play();
});

buttonPlus.addEventListener('click', () => {
  minutes = minutes + 5;
  updateDisplay(minutes,seconds);
  buttonPressAudio.play();
});

buttonMinus.addEventListener('click', () => {
  minutes = minutes - 5;
  updateDisplay(minutes,seconds);
  buttonPressAudio.play();
});

buttonForest.addEventListener('click', () => {
  if(a ==! 0){
    cardReset();
    return;
  };
  cardReset();
  buttonForest.classList.add('active-card');
  soundForest.play();
  a++;
});

buttonRain.addEventListener('click', () => {
  if(b ==! 0){
    cardReset();
    return;
  };
  cardReset();
  buttonRain.classList.add('active-card');
  soundRain.play();
  b++;
});

buttonCoffee.addEventListener('click', () => {
  if(c ==! 0){
    cardReset();
    return;
  };
  cardReset();
  buttonCoffee.classList.add('active-card');
  soundCoffee.play();
  c++;
});

buttonFirePlace.addEventListener('click', () => {
  if(d ==! 0){
    cardReset();
    return;
  }
  cardReset();
  buttonFirePlace.classList.add('active-card');
  soundFirePlace.play();
  d++;
});

toggleModeButton.addEventListener ('click', () => {
  document.documentElement.classList.toggle('darkMode');
});

volumeForest.addEventListener('input', () => {
  soundForest.volume = volumeForest.value;
});

volumeRain.addEventListener('input', () => {
  soundRain.volume = volumeRain.value;
});

volumeCoffee.addEventListener('input', () => {
  soundCoffee.volume = volumeCoffee.value;
});

volumeFirePlace.addEventListener('input', () => {
  soundFirePlace.volume = volumeFirePlace.value;
});
