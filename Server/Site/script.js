
var app = angular.module('myApp', []);
app.controller("myCtrl", function($scope, $http) {
  $scope.Array = [];
  $http.get("/index").then(function(response) {
    console.log(response);
    $scope.Array = response.data;
  })
})
