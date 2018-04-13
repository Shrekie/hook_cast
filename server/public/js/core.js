var app = angular.module('hook_cast', ['ngRoute']);

app.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { 
		controller: 'mainController'
	})
	.otherwise({ redirectTo: '/' });
});

app.controller('mainController', function($scope) {
    console.log("wut");
});