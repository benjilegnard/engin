/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        angular: {
            exports:'angular'
        },
        'angular-resource':{
            deps: [
                'angular'
            ]
        }
    },
    paths: {
        jquery: 'libs/jquery-1.9.1',
        async: 'libs/requirejs/async',
        domReady: 'libs/requirejs/domReady',
        font: 'libs/requirejs/font',
        text: 'libs/requirejs/text',
        angular: 'libs/angular-1.1.4',
        'angular-resource': 'libs/angular-resource-1.0.6',
        'jquery-ui': 'libs/jquery-ui-1.9.1.custom.min',
        modernizr: 'libs/modernizr',
        'ng-grid': 'libs/ng-grid-2.0.5',
        respond: 'libs/respond',
        'ui-bootstrap-tpls': 'libs/ui-bootstrap-tpls-0.3.0'
        //,googlemaps:'async!http://maps.google.com/maps/api/js?sensor=false'
        //,facebook:'async!http://connect.facebook.net/en_US/all' + (debug ? '/debug' : '') + '.js'
    },
    waitSeconds : 160, //make sure it is enough to load all gmaps scripts
    basePath:'/js/'
});