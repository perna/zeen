'use strict';

var app = angular.module('zeen',['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html'
        })
        .when('/hello', {
            templateUrl: 'partials/hello.html',
            controller:'HelloController'
        })
        .when('/map', {
            templateUrl:'partials/map.html'
        })
        .when('/users/', {
            templateUrl: 'partials/users/list.html',
            controller:'UserController'
        })
        .when('/users/add', {
            templateUrl: 'partials/users/add.html',
            controller:'UserController'
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