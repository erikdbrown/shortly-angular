angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  // Your code here
  $scope.data = {};
  if (Auth.isAuth()){
    Links.getAll().then(function(data) {
      console.log("Data in Links Promise.then(): ", data);
      $scope.data.links = data;
    });
  } else {
    $location.path('/signin');
  }
  
});

