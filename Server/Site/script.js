
var app = angular.module('myApp', []);
app.controller("myCtrl", function($scope, $http) {
  $http.get("/index").then(function(response) {
    console.log(response);
  })
})
