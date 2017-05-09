/*jshint esversion: 6 */
angular.module('app')
  .controller('UsersCtrl', ['$scope', '$rootScope', 'UserService',
    function($scope,$rootScope,UserService){
      $scope.userList = UserService;
      $scope.user = UserService.getUser();
      $scope.list = [];
      $scope.list.push($scope.user);
      console.log($scope.user);

    }])
  .controller('TopicCtrl', ['$scope', 'TopicService',
    function($scope,$rootScope,TopicService){
      console.log(TopicService);
      // TopicService.getTopics()
      //   .then(data => {
      //     console.log(data);
      //     $scope.topics = data.data;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }])



  .controller('MessageCtrl', ['$scope',
    function($scope) {
      $scope.Message = "is it working right now";
    }
  ]);
