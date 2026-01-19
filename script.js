//Character Declaration.
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let numbers = ["1", "2", "3", "4", "5", "6", "7", "7", "8", "9", "0"];
let specialChar = "!@$&^#";

// Variable Declarations.
const passwordLengthBar = document.getElementById("passwordLengthBar");
const lengthBox = document.getElementById("lengthBox");
const numberSelector = document.getElementById("numberSelector");
const upperCharSelector = document.getElementById("upperCharSelector");
const lowerCharSelector = document.getElementById("lowerCharSelector");
const specialCharSelector = document.getElementById("specialCharSelector");
const generatePass = document.getElementById("generatePass");
const addNumber = false,
  addUpperChar = false,
  addLowerChar = false,
  addSpecialChar = false;
const password = "";

// Length Bar.
passwordLengthBar.value = 0;
passwordLengthBar.addEventListener("change", function (e) {
  const len = Math.floor(passwordLengthBar.value / 5);
  lengthBox.innerText = len;
  // console.log(`Bg No. ${len}`);
});

//Is Checkbox checked.
function checkCategory() {
  if (numberSelector.checked === true) {
    addNumber = true;
  } else if (upperChar.checked === true) {
    addUpperChar = true;
  } else if (lowerChar.checked === true) {
    addLowerChar = true;
  } else if (specialChar.checked === true) {
    addSpecialChar = true;
  }
}

//Password Generator Function.
function GeneratePass() {
  
}

// Generate Button
generatePass.addEventListener("click", function () {});
