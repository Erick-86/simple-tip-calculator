"use strict";

//Creating variables
let input = document.getElementById("input");
const calcNumbers = document.querySelectorAll(".number");
const btnClear = document.getElementById("clear-btn");
const btnEnter = document.getElementById("enter-btn");

for (let i = 0; i < calcNumbers.length; i++) {
  calcNumbers[i].addEventListener("click", () => {
    let currentValue = Number(input.value || "0"); // parse the current input value or default to 0
    let newValue = Number(calcNumbers[i].textContent); // parse the clicked number
    input.value = currentValue * 10 + newValue; // concatenate the current value and the clicked number
    console.log(currentValue);
    console.log(newValue);
    console.log(typeof input.value);
  });
}

btnClear.addEventListener("click", () => {
  input.value = "";
});

btnEnter.addEventListener("click", () => {
  let inputValue = Number(input.value);
  let tipPercentage = inputValue >= 50 && inputValue <= 300 ? 0.15 : 0.2
  let tipAmount = inputValue * tipPercentage
  input.value = tipAmount.toFixed(1)
});
  