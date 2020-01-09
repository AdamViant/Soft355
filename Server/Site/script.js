// $(function() {
//   $.get("http://localhost:9000/", {}, function(res) {
//     let data = res
//     for (i=0; i<data.length; i++) {
//       let stops = data[i].stops;
//       $("container").append
//       (
//         "<h3 class=\"categoryName\">" + data[i].categoryName + "</h3>"
//       )
//   }
// });
// });
var app = angular.module('myApp', []);
app.controller("myCtrl", function($scope, $http) {
  $scope.myArray = [];
  $http.get("/index").then(function(response) {
    $scope.myArray = response;
  })
})
