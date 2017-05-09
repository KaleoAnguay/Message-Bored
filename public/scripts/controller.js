angular.module('app')
  .controller('createUserCtrl',
    ['$scope', '$location', 'UserService',
    function($scope, $location, UserService){

      $scope.createUser = function(username) {
        UserService.addUser(createUserObj(username))
          .then(response => {
            localStorage.setItem('user', response.data.name);
            localStorage.setItem('user_id', response.data.id);
            $location.path('/');
            location.reload();
          })
          .catch(err => {
            console.log(err);
          });
      };
    }
  ]);