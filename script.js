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
let len = 0;

// Handle Length bar event
passwordLengthBar.value = 0;
passwordLengthBar.addEventListener("change", function (e) {
  len = Math.floor(passwordLengthBar.value / 5);
  lengthBox.innerText = len;
});

//Password Generator Function.
function GeneratePass() {
  let tempLen = len,
    randomNumber = -1;
  let password = [];

  while (tempLen != 0) {
    randomNumber = Math.floor(Math.random() * 4);

    if (numberSelector.checked && randomNumber == 0) {
      password.push(numbersArray[Math.floor(Math.random() * 10)]);
      tempLen--;
    } else if (upperCharSelector.checked && randomNumber == 1) {
      password.push(uppercaseArray[Math.floor(Math.random() * 26)]);
      tempLen--;
    } else if (lowerCharSelector.checked && randomNumber == 2) {
      password.push(lowerCaseArray[Math.floor(Math.random() * 26)]);
      tempLen--;
    } else if (specialCharSelector.checked && randomNumber == 3) {
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
  if (len == 0) {
    alert("Select password length..!");
    return;
  } else if (
    !numberSelector.checked &&
    !upperCharSelector.checked &&
    !lowerCharSelector.checked &&
    !specialCharSelector.checked
  ) {
    alert("Please select at least one category!");
    return;
  } else {
    GeneratePass();
  }
});