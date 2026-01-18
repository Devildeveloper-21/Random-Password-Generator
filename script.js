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

passwordLengthBar.value = 0;
passwordLengthBar.addEventListener("change", function (e) {
  const len = Math.floor(passwordLengthBar.value / 5);
  lengthBox.innerText = len;
  // console.log(`Bg No. ${len}`);
});


