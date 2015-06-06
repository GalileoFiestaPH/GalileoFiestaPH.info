'use strict';

var galileoServices = angular.module('galileoServices', ['ngResource']);

galileoServices.factory('Data', ['$resource',
    function ($resource) {
        return $resource('assets/data/:dataId.json', {}, {
            query: {
                method: 'GET',
                params: {dataId: 'project-list'},
                isArray: true
            }
        });
    }]);

galileoServices.service('details', function Details() {
    var details = this;

    details.searchBar = '';
    details.title = 'Galileo Fiesta';
    details.desc = 'Philippines';
});