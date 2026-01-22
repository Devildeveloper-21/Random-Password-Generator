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

//Setting Scheckbox Flags.
let includeNumber = false,
  includeUpperCase = false,
  includeLowerCase = false,
  includeSymbol = false;

//String Storing.
const password = [];
let ptr = 0;
let randomNumber = Math.floor(Math.random());
console.log(randomNumber);

let len = 0;
// Length Bar.
passwordLengthBar.value = 0;
passwordLengthBar.addEventListener("change", function (e) {
  len = Math.floor(passwordLengthBar.value / 5);
  lengthBox.innerText = len;
});

//Is Checkbox checked.
function checkCategory() {

  let CheckboxCounter = 0;
  if (numberSelector.checked === true) {
    includeNumber = true;
    CheckboxCounter++;
  } else {
    includeNumber = false;
    CheckboxCounter--;
  }
  if (upperCharSelector.checked === true) {
    includeUpperCase = true;
    CheckboxCounter++;
  } else {
    includeUpperCase = false;
    CheckboxCounter--;
  }
  if (lowerCharSelector.checked === true) {
    includeLowerCase = true;
    CheckboxCounter++;
  } else {
    includeLowerCase = false;
    CheckboxCounter--;
  }
  if (specialCharSelector.checked === true) {
    includeSymbol = true;
    CheckboxCounter++;
  } else {
    includeSymbol = false;
    CheckboxCounter--;
  }
  if (CheckboxCounter === 0) {
    alert("Select a Category..!");
    console.log(CheckboxCounter);
  }
}

//Password Generator Function.
function GeneratePass() {
  let tempLen = len;

  while (tempLen != 0) {
    randomNumber = Math.floor(Math.random() * 4);

    if (includeNumber === true && randomNumber == 0) {
      password.push(numbersArray[Math.floor(Math.random() * 10)]);
      tempLen--;
    }
    if (includeUpperCase === true && randomNumber == 1) {
      password.push(uppercaseArray[Math.floor(Math.random() * 26)]);
      tempLen--;
    }
    if (includeLowerCase === true && randomNumber == 2) {
      password.push(lowerCaseArray[Math.floor(Math.random() * 26)]);
      tempLen--;
    }
    if (includeSymbol === true && randomNumber == 3) {
      password.push(symbolArray[Math.floor(Math.random() * 6)]);
      tempLen--;
    }
  }

  passwordBox.innerText = " ";
  passwordBox.innerText = password.join("");
  password.length = 0;
}

// Generate Button
generatePass.addEventListener("click", function () {
  checkCategory();
  if (len === 0) {
    alert("Select password length..!");
  } else {
    GeneratePass();
  }
});
