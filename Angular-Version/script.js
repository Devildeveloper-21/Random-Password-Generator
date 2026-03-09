const app = angular.module("passwordApp", []);
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const numberArray = "1234567890";
const symbolArray = "!@#$^";

app.controller("passwordController", function ($scope) {
  // Function To get password and error on Password Length.
  function passLength() {
    if (!$scope.length || $scope.length === 0 || $scope.lenght > 30) {
      alert("Password length must be between 4 and 30 characters.");
      $scope.length = 0;
      return;
    }
  }

  // Function To Generate Password.
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
    $scope.password=password.join("");
  }

  $scope.generatePassword = () => {
    passLength();
    createPassword();
  };
});
