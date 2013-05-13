'use strict';

/* Controllers */
angular.module('Engin.controllers', [])
.controller('AppCtrl', function($scope, $http) {
        $http({method: 'GET', url: '/api/name'}).
            success(function(data, status, headers, config) {
                $scope.name = data.name;
            }).
            error(function(data, status, headers, config) {
                $scope.name = 'Error!'
            });
    }
).controller('WriterCtrl',function(){

    }
).controller('CoderCtrl',function(){}
).controller('MenuCtrl',function(){

    }
).controller('FiddleCtrl',function(){});

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
