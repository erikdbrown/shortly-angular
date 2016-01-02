angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  if (Auth.isAuth()) {
    $scope.link = {};
    $scope.addLink = Links.addOne;
  } else {
    $location.path('/signin');
  }
});
