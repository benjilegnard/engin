/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        angular: {
            exports: 'angular'
        }
    },
    namespace: "foo",
    paths: {
        engin: 'app',
        angular: 'libs/angular',
        'angular-resources': 'libs/angular-resources',
        backbone: 'libs/backbone',
        underscore: 'libs/lodash',
        modernizr:'libs/modernizr',
        three:'libs/three',
        async:'libs/require/async',
        domReady:'libs/require/domReady'

    }
    }
);


require(["engin"],
    function(App) {
        App.initialize();
    }
);