// Variables
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const inputNumber = document.querySelector("#inputNumber");

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleKeyEnter);

// Callback Function
function handleTryClick(event) {
  event.preventDefault();

  if (inputNumber.value == "") {
    alert("Precisa digitar pelo menos um número!");
  } else {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen();

      screen2.querySelector(
        "h2"
      ).innerText = `Acertou em ${xAttempts} tentativas!`;
    }
    xAttempts++;
  }
}

function handleResetClick() {
  toggleScreen();

  inputNumber.value = "";

  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function handleKeyEnter(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}

// Functions
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
