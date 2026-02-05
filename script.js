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
const popUpThemeButton = document.getElementById("popUpThemeButton");
let currentTheme = null;
const themeCardContainer = document.getElementById("themeCardContainer");
const copyToClipboard = document.getElementById("copyToClipboard");

// Handle Length bar event
passwordLengthBar.value = 0;
passwordLengthBar.addEventListener("change", function (e) {
  len = Math.floor(passwordLengthBar.value / 5);
  lengthBox.innerText = len;
});

let password = [];
//Password Generator Function.
function GeneratePass() {
  let tempLen = len,
    randomNumber = -1;

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

copyToClipboard.addEventListener("click",async function () {
  const passwordBox = document.getElementById("passwordBox");
  try
  {
    await navigator.clipboard.writeText(passwordBox.innerText);
  }
  catch(err)
  {
    console.log(err);
    
alert("Copy failed")
  }
});

const themeDropdownContainer = document.querySelector(
  ".themeDropdownContainer",
);

themeDropdownContainer.style.display = "none";
popUpThemeButton.addEventListener("click", function () {
  if (themeDropdownContainer.style.display === "none") {
    themeDropdownContainer.style.display = "flex";
    themeDropdownContainer.style.animation =
      "show-animation 0.4s ease forwards";
  } else {
    themeDropdownContainer.style.animation =
      "hide-animation 0.5s ease forwards";

    themeDropdownContainer.addEventListener(
      "animationend",
      function () {
        themeDropdownContainer.style.display = "none";
      },
      { once: true },
    );
  }
});

//Theme related functions and listner
themeCardContainer.addEventListener("click", function (e) {
  const theme = e.target.id;
  console.log(e.target);
  if (!e.target.classList.contains("themeOption")) return;

  loadTheme(theme);
});
function loadThemeFromLocalStorage() {
  let savedTheme = localStorage.getItem("theme");
  if (!savedTheme) {
    localStorage.setItem("theme", "lavender");
    savedTheme = "lavender";
  }
  console.log(savedTheme);
  loadTheme(savedTheme);
}
function loadTheme(theme) {
  document.documentElement.classList.remove(currentTheme);
  document.documentElement.classList.add(theme);
  document.documentElement.animation = "show-animation 0.4s ease forwards";
  currentTheme = theme;
  themeDropdownContainer.style.animation = "hide-animation 0.5s ease forwards";
  themeDropdownContainer.addEventListener(
    "animationend",
    function () {
      themeDropdownContainer.style.display = "none";
    },
    { once: true },
  );

  localStorage.setItem("theme", theme);
}
document.addEventListener("DOMContentLoaded", () => {
  loadThemeFromLocalStorage();
});
document.body.addEventListener("click", (e) => {
  if (e.target == themeDropdownContainer || e.target == popUpThemeButton)
    return;
  themeDropdownContainer.style.animation = "hide-animation 0.5s ease forwards";
  themeDropdownContainer.addEventListener(
    "animationend",
    function () {
      themeDropdownContainer.style.display = "none";
    },
    { once: true },
  );
});
