'use strict';
describe('My Project', function () {
    var $controllerConstructor, scope;
    beforeEach(angular.mock.module('main'));
    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));
    it('test1', function () {
        var mockBook = {title: 'Programming in C', author: 'Dennis M Ritchie'};
        var ctrl = $controllerConstructor('homeController',{$scope:scope});
        expect(scope.book).toEqual(mockBook);
    });
});