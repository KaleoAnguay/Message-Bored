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
        },
        getUserList: function() {
          return $http.get('/api/users');
        }
      };
    }]
  )
  .service('TopicService', [
    '$http', function($http) {
      return {
        addTopics: function(topicObj) {
          return $http.post('api/topics', topicObj);
        },
        getTopics: function() {
          return $http.get('api/topics');
        },
        getSingleTopic: function() {
          return $http.get('/api/topics/${topic_id}');
        }
      };
    }
  ]);