/*jshint esversion: 6 */
angular.module('app')
  .service('UserService',
    ['$http', function($http) {
      return {
        addUser: function(dataObj) {
          return $http.post('api/users', dataObj);
        },
        getUser: function(username) {
          return $http.get(`/api/users/${username}`);
        }
      };
    }]
  );