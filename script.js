//Character Declaration.
let numbersArray = ["1", "2", "3", "4", "5", "6", "7", "7", "8", "9", "0"];
let uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseArray = "abcdefghijklmnopqrstuvwxyz";
let symbolArray = "!@$&#^";

// Variable Declarations.
const passwordLengthBar = document.getElementById("passwordLengthBar");
const lengthBox = document.getElementById("lengthBox");
const numberSelector = document.getElementById("numberSelector");
const upperCharSelector = document.getElementById("upperCharSelector");
const lowerCharSelector = document.getElementById("lowerCharSelector");
const specialCharSelector = document.getElementById("specialCharSelector");
const generatePass = document.getElementById("generatePass");
const passwordBox = document.getElementById("passwordBox");

let includeNumber = false,
  includeUpperCase = false,
  includeLowerCase = false,
  includeSymbol = false;
const password = [];
let ptr = 0;
let randomNumber = Math.floor(Math.random());
console.log(randomNumber);
let len = 0,
  count = 0;
// Length Bar.
passwordLengthBar.value = 0;
passwordLengthBar.addEventListener("change", function (e) {
  len = Math.floor(passwordLengthBar.value / 5);
  lengthBox.innerText = len;
  count = len;
  // console.log(`Bg No. ${len}`);
});

//Is Checkbox checked.
function checkCategory() {
  if (numberSelector.checked === true) {
    includeNumber = true;
  }
  if (upperCharSelector.checked === true) {
    includeUpperCase = true;
  }
  if (lowerCharSelector.checked === true) {
    includeLowerCase = true;
  }
  if (specialCharSelector.checked === true) {
    includeSymbol = true;
  }
}

//Password Generator Function.
function GeneratePass() {
  while (len != 0) {
    randomNumber = Math.floor(Math.random() * 4);

    if (includeNumber === true && randomNumber == 0) {
      password[ptr] = numbersArray[Math.floor(Math.random() * 10)];
      ptr++;
      len--;
    }
    if (includeUpperCase === true && randomNumber == 1) {
      password[ptr] = uppercaseArray[Math.floor(Math.random() * 26)];
      ptr++;
      len--;
    }
    if (includeLowerCase === true && randomNumber == 2) {
      password[ptr] = lowerCaseArray[Math.floor(Math.random() * 26)];
      ptr++;
      len--;
    }
    if (includeSymbol === true && randomNumber == 3) {
      password[ptr] = symbolArray[Math.floor(Math.random() * 6)];
      ptr++;
      len--;
    }
  }

  for (let i = 0; i < count; i++) {
    passwordBox.innerText += password[i];
  }
}

// Generate Button
generatePass.addEventListener("click", function () {
  checkCategory();
  GeneratePass();
});
