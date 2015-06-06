'use strict';

var galileoControllers = angular.module('galileoControllers', []);

galileoControllers.controller('GalileoCtrl', ['$routeParams', '$location', 'details',
    function($routeParams, $location, details) {
        var galileo = this;

        galileo.header = 'assets/partials/header.html';
        galileo.footer = 'assets/partials/footer.html';

        galileo.details = details;
        galileo.details.searchBar = details.searchBar;

        galileo.goSearch = function () {
            $location.path('/search');
        };
        galileo.clear = function () {
            document.getElementById('search-bar').focus();
            galileo.details.searchBar = '';
        }
    }]);

galileoControllers.controller('StaticCtrl', ['$routeParams', '$sce', 'details', 'Data',
    function($routeParams, $sce, details, Data) {
        var theStatic = this;
        theStatic.details = details;
        theStatic.selectedImage = '';
        theStatic.selectImage = function (image) {
            if (theStatic.selectedImage === image) {
                theStatic.selectedImage = '';
            } else theStatic.selectedImage = image;
        }
        theStatic.isImage = function (image) {
            if (theStatic.selectedImage === image) {
                return true;
            } else return false;
        }
        theStatic.inSlide = function () {
            if (theStatic.selectedImage !== '') {
                return true;
            } else return false;
        }

        theStatic.info = Data.get({dataId: $routeParams.dataId}, function (result) {

            if (result.type === 'page') {
                theStatic.details.title = 'Galileo Fiesta';
                theStatic.details.desc = result.pageDesc || theStatic.details.desc;
            } else if (result.type === 'project') {
                theStatic.details.title = result.projectTitle || theStatic.details.title;
                theStatic.details.desc = result.projectAuthor || theStatic.details.desc;
            }

            if (result.projectVideo) {
                theStatic.videoURL = $sce.trustAsResourceUrl(result.projectVideo);
            }

        }, function (response) {
            if (response.status === 404) {
                theStatic.details.title = 'Galileo Fiesta';
                theStatic.details.desc = 'Philippines';
                theStatic.info = Data.get({dataId: '404'});
            }
        });

    }]);

galileoControllers.controller('SearchCtrl', ['$routeParams', 'details', 'Data',
    function($routeParams, details, Data) {
        var search = this;

        search.order = 'projectTitle';
        search.ascending = false;
        search.orderClick = function (selection) {
            if (search.order !== selection) {
                search.order = selection;
                search.ascending = false;
            } else {
                search.ascending = !search.ascending;
            }
        }
        search.orderCheck = function (selection) {
            if (search.order === selection) {
                return true;
            } else return false;
        }

        search.details = details;
        search.details.searchBar = details.searchBar;
        search.details.title = 'Galileo Fiesta';
        search.details.desc = 'Search';

        search.info = Data.query();
    }]);