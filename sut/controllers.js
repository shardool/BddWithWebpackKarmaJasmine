'use strict';
module.exports = function(app){
    angular.module(app)
        .controller('homeController', ['$scope', function ($scope) {
            $scope.book = {title: 'Programming in C', author: 'Dennis M Ritchie'};
        }]);
};