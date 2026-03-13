const app = angular.module("passwordApp", []);
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const numberArray = "1234567890";
const symbolArray = "!@#$^";

app.controller("passwordController", function ($scope) {
  // Function To Generate Password.
  $scope.length=0;
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
    }else{
      $scope.themeVisible=false;
    }
  };

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
  };
});
