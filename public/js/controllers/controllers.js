'use strict';

/* Services */

define(['angular'],function(angular){

    angular.module('engin.controllers', []).
        controller('MyCtrl1', [function() {

    }])
        .controller('MyCtrl2', [function() {

    }]).controller('MainCtrl', [
        function($scope) {

            $scope.world = "World";
        }]);


});