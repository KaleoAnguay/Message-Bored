/* globals angular */
angular.module('app', ['ngRoute'])
  .config([
    '$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

      $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
        })
        .when('/users', {
          templateUrl: '/templates/users.html',
          controller: 'UsersCtrl',
          controllerAs: 'users'
        })
        .when('/login', {
          templateUrl: '/templates/login.html'
        })
        .when('/topic', {
          templateUrl: '/templates/topic.html'
        });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }]);