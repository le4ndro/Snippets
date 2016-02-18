angular.module('snippetApp', ['ui.codemirror', 'ui.router', 'ngResource', 'snippetApp.controllers', 'snippetApp.services']);

angular.module('snippetApp').config(function($stateProvider) {
  $stateProvider.state('snippets', { // state for showing all movies
    url: '/snippets',
    templateUrl: 'app/partials/snippets.html',
    controller: 'SnippetListController'
  }).state('viewSnippet', { //state for showing single movie
    url: '/snippets/:id/view',
    templateUrl: 'app/partials/snippet-view.html',
    controller: 'SnippetViewController'
  }).state('newSnippet', { //state for adding a new movie
    url: '/snippets/new',
    templateUrl: 'app/partials/snippet-add.html',
    controller: 'SnippetCreateController'
  }).state('editSnippet', { //state for updating a movie
    url: '/snippets/:id/edit',
    templateUrl: 'app/partials/snippet-edit.html',
    controller: 'SnippetEditController'
  });
}).run(function($state) {
  $state.go('snippets'); //make a transition to movies state when app starts
});