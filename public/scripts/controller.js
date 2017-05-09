angular.module('app')
  .controller('UsersCtrl', ['$scope', '$rootScope', 'UserService',
    function($scope,$rootScope,UserService){
      $scope.testScope = "hello scope";
      this.controllerAsTest = "hello controllerAs";
      localStorage.testLS = "hello";
    }])
  .controller('TopicCtrl', ['$scope',
    function($scope){
      $scope.topicScope = "hello fsdfsdfscope";
      this.controllerAsTest = "hello controllerAs";
      localStorage.testLS = "hello";
    }]);
