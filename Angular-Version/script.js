const app = angular.module("passwordApp", []);
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const numberArray = "1234567890";
const symbolArray = "!@#$^";

app.controller("passwordController", function ($scope) {
  // Function To Generate Password.
  $scope.length = 0;
  function createPassword() {
    let password = [];
    let tempLen = $scope.length;

    while (tempLen != 0) {
      let randomValue = Math.floor(Math.random() * 4);

      if ($scope.numbers && randomValue === 0) {
        password.push(numberArray[Math.floor(Math.random() * 10)]);
        tempLen--;
      } else if ($scope.upper && randomValue === 1) {
        password.push(upperChar[Math.floor(Math.random() * 26)]);
        tempLen--;
      } else if ($scope.lower && randomValue === 2) {
        password.push(lowerChar[Math.floor(Math.random() * 26)]);
        tempLen--;
      } else if ($scope.symbols && randomValue === 3) {
        password.push(symbolArray[Math.floor(Math.random() * 5)]);
        tempLen--;
      }
    }
    $scope.password = password.join("");
  }
  $scope.themeVisible = false;
  $scope.showThemes = () => {
    if (!$scope.themeVisible) {
      $scope.themeVisible = true;
    } else {
      $scope.themeVisible = false;
    }
  };

  $scope.copyIcon = true;
  $scope.copyPassword = () => {
    const passwordField = angular.element(
      document.querySelector(".passwordField"),
    );
    console.log(passwordField.text());
    $scope.copyIcon = false;
    $scope.copiedIcon = true;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(passwordField.text());
    } else {
      alert("Copy Failed");
    }
    setTimeout(() => {
      $scope.$apply(() => {
        $scope.copyIcon = true;
        $scope.copiedIcon = false;
      });
    }, 2000);
  };

  $scope.themeVisible = false;
  const themeDropdownContainer = document.querySelector(
    ".themeDropdownContainer",
  );
  $scope.showThemes = function () {
    if ($scope.themeVisible === false) {
      $scope.themeVisible = true;
      themeDropdownContainer.style.animation =
        "show-animation 0.4s ease forwards";
    } else {
      $scope.$apply(() => {
      themeDropdownContainer.style.animation =
        "hide-animation 0.4 ease forwards";
      themeDropdownContainer.addEventListener(
        "animationend",
        function () {
          
            $scope.themeVisible = false;
          },{ once: true });
        });
    }
  };

  $scope.selectTheme = function (theme) {
    themeDropdownContainer.style.animation =
      "hide-animation 0.4s ease forwards";
    themeDropdownContainer.addEventListener("animationend", function () {
      $scope.themeVisible = false;
    });
    document.documentElement.className = "";
    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
    console.log(localStorage);
  };

  // Load theme from storage
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  }

  $scope.generatePassword = () => {
    if ($scope.length == 0) {
      alert("Select password length.");
    } else if (
      !$scope.upper &&
      !$scope.lower &&
      !$scope.numbers &&
      !$scope.symbols
    ) {
      alert("Select atleast one password category.");
      return;
    } else {
      createPassword();
    }
    $scope.copyIcon = true;
    $scope.copiedIcon = false;
  };
});
