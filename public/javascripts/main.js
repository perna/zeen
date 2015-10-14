'use strict';

var app = angular.module('zeen',['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html'
        })
        .when('/users/', {
            templateUrl: 'partials/users/list.html',
            controller:'UserController'
        })
        .when('/users/add', {
            templateUrl: 'partials/users/add.html',
            controller:'UserController'
        })
        .when('/checkin/add', {
            templateUrl: 'partials/checkin/add.html',
            controller:'CheckinController'
        })
        .when('/points/add', {
            templateUrl: 'partials/points/search.html',
            controller:'CheckinController'
        })
        .otherwise({
            redirectTo:'/home'
        });
});

app.controller('HelloController', function($scope){
    console.log('hello');
});

app.controller('UserController', function($scope, $http, $location){

    $scope.user = null;
    $scope.users = [];

    $http.get('/api/users')
        .then(function(response) {
            $scope.users = response.data;
        });

    $scope.saveUser = function() {
        $http.post('/api/users', $scope.user)
            .then(function(response) {
                $location.path('/users');
            })
    }

});

app.controller('CheckinController', function($scope, $http) {
    console.log('Checkin Controller');
});


app.controller('PointsController', function($scope, $http){
    console.log('Points Controller');
});