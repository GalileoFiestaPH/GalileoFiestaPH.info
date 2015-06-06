'use strict';

var galileoFiestaApp = angular.module('galileoFiestaApp', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'galileoControllers',
    'galileoServices'
]);

galileoFiestaApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/search'
            })
            .when('/search', {
                templateUrl: 'assets/partials/search.html',
                controller: 'SearchCtrl',
                controllerAs: 'search'
            })
            .when('/project/:dataId', {
                templateUrl: 'assets/partials/static.html',
                controller: 'StaticCtrl',
                controllerAs: 'theStatic'
            })
            .when('/pages/:dataId', {
                templateUrl: 'assets/partials/static.html',
                controller: 'StaticCtrl',
                controllerAs: 'theStatic'
            })
            .otherwise({
                templateUrl: 'assets/partials/static.html',
                controller: 'StaticCtrl',
                controllerAs: 'theStatic'
            });
    }]);