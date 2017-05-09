/* globals angular */
angular.module('app', ['ngRoute'])
  .config([
    '$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

      $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'TopicCtrl'
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
    }])
  .run(['$rootScope','$location', 'UserService','TopicService',
    function($rootScope, $location, UserService,TopicService) {
      $rootScope.getUser = function(username) {
        if(!username) {
          $rootScope.responseError = 'Enter Login Username';
          return;
        }
        UserService.getUser(username)
          .then(response => {
            if (response.data.length !== 1) {
              $rootScope.responseError = 'User does not exist';
            } else {
              localStorage.setItem('user', response.data[0].name);
              localStorage.setItem('user_id', response.data[0].id);
              $location.path('/');
              location.reload();
            }
          })
          .catch(err => {
            console.log(err);
          });
      };

      $rootScope.logOutUser = function() {
        localStorage.clear();
        location.reload();
      };

      if (localStorage.user !== undefined) {
        $rootScope.user = localStorage.user;
        $rootScope.user_id = localStorage.user_id;
        $rootScope.loggedIn = true;
      } else {
        $rootScope.loggedIn = false;
      }
    }
  ]);