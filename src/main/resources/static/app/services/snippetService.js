angular.module('snippetApp.services', []).factory('Snippet', function($resource) {
  return $resource('http://localhost:8080/api/snippets/:id', { 
	id: '@id' 
	}, {
    update: {
      method: 'PUT'
    },
      remove: {
        method: 'DELETE'
      }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});