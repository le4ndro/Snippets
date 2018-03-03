angular.module('snippetApp.controllers', []).controller('SnippetListController', function($scope, $state, popupService, $window, Snippet) {
  $scope.snippets = Snippet.query(); //fetch all movies. Issues a GET to /api/snippets

  
  $scope.deleteSnippet = function(snippet) { // Delete a movie. Issues a DELETE to /api/snippets/:id
    if (popupService.showPopup('Really delete this?')) {
      snippet.$delete(function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
}).controller('SnippetViewController', function($scope, $stateParams, Snippet) {
  $scope.snippet = Snippet.get({ id: $stateParams.id }); //Get a single snippet.Issues a GET to /api/snippets/:id
  
  $scope.cmOption = {
		lineNumbers: true,
		theme:'twilight',
		readOnly: 'nocursor',
	    indentWithTabs: true,
	    onLoad : function(_cm){
	 
	      // HACK to have the codemirror instance in the scope...
	  $scope.modeChanged = function(){
	    _cm.setOption("mode", $scope.snippet.linguagem.toLowerCase());
	      };
	    }
	  };
  
}).controller('SnippetCreateController', function($scope, $state, $stateParams, Snippet) {
  $scope.snippet = new Snippet();  //create new movie instance. Properties will be set via ng-model on UI

  //The modes
  $scope.modes = ['SQL', 'Javascript'];
  $scope.snippet.linguagem = $scope.modes[0];
 
  // The ui-codemirror option
  $scope.cmOption = {
    lineNumbers: true,
    theme:'twilight',
    indentWithTabs: true,
    onLoad : function(_cm){
 
      // HACK to have the codemirror instance in the scope...
      $scope.modeChanged = function(){
        _cm.setOption("mode", $scope.snippet.linguagem.toLowerCase());
      };
    }
  };
 
  // Initial code content...
  $scope.snippet.codigo = 'Escreve seu código aqui.';
  
  $scope.addSnippet = function() { //create a new movie. Issues a POST to /api/snippets
    $scope.snippet.$save(function() {
      $state.go('snippets'); // on success go back to home i.e. snippets state.
    });
  };
}).controller('SnippetEditController', function($scope, $state, $stateParams, Snippet) {
  $scope.updateSnippet = function() { //Update the edited snippet. Issues a PUT to /api/snippets/:id
    $scope.snippet.$update(function() {
      $state.go('snippets'); // on success go back to home i.e. snippets state.
    });
  };

  $scope.loadSnippet = function() { //Issues a GET request to /api/snippets/:id to get a movie to update
    $scope.snippet = Snippet.get({ id: $stateParams.id });
  };

  $scope.loadSnippet(); // Load a snippet which can be edited on UI
});