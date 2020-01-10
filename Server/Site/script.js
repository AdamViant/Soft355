var app = angular.module('indexCat', []);
app.controller("indexCtrl", function($scope, $http) {
  $scope.Array = [];
  $http.get("/index").then(function(response) {
    console.log(response);
    $scope.Array = response.data;
  })
})

var app = angular.module('archiveCat', []);
app.controller("archiveCtrl", function($scope, $http) {
  $scope.Array = [];
  $http.get("/archive").then(function(response) {
    console.log(response);
    $scope.Array = response.data;
  })
})

function categoryClick(id)
{
  this.http.post("/catSelect", id);
};
