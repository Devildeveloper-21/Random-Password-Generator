const app = angular.module("passwordApp", []);
app.controller("passwordController", function ($scope) {

    function passLength() {
      if (!$scope.length || $scope.length == 0) {
        alert("lenght is zero");
        return;
      }
      console.log("Testing");   
    }

  $scope.generatePassword = () => {
    passLength();
  };
});