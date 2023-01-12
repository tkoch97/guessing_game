// Variables
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const notTheNumber = document.querySelector(".notTheNumber");
const error = document.querySelector(".error");
const buttonTry = document.querySelector("#buttonTry");
const buttonReset = document.querySelector("#buttonReset");
const inputNumber = document.querySelector ("#inputNumber");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Functions

function notTheNumberMessage() {
  if (Number(inputNumber.value) != randomNumber && Number(inputNumber.value) <= 10) {
    notTheNumber.classList.remove("hide");
  } else {
    notTheNumber.classList.add("hide");
  }
}

function invalidMessage() {
  if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
    error.classList.remove("hide");
  } else {
    error.classList.add("hide");
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function toggleScreenWithMessage() {
  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    if (xAttempts == 1) {
      screen2.querySelector("h2").innerText = `Parabéns! o número que pensei foi ${randomNumber}, você acertou em 1 tentativa.`
    } else {
      screen2.querySelector("h2").innerText = `Parabéns! o número que pensei foi ${randomNumber}, você acertou em ${xAttempts} tentativas.`
    }
  }
}

function handleTryClick (event) {
  event.preventDefault(event);

  
  notTheNumberMessage()

  invalidMessage()
  
  toggleScreenWithMessage()

  inputNumber.value = ""
  xAttempts++
  
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10);
}

function handleResetKeydown(enter) {
  if (enter.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}

// Events
buttonTry.addEventListener('click', handleTryClick);
buttonReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleResetKeydown);