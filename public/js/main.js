// Require JS  Config File

require.config({
    paths : {
        "angular" : "libs/angular-1.1.4"
        ,"angular-resource":"libs/angular-resource-1.0.6"
        ,"jquery":"libs/jquery-1.9.1"
        ,"jquery-ui":"libs/jquery-ui-1.9.1.custom.min"
        ,"modernizr":"libs/modernizr"
        ,"ng-grid5":"libs/ng-grid-2.0.5"
        ,"respond":"libs/respond"
        ,"ui-bootstrap":"libs/ui-bootstrap-tpls-0.3.0"
    },
    shim : {
        angular  :{
            exports : "angular"
        }
    },
    baseUrl: 'js/'
});


require(["engin"],
    function(App) {
        App.initialize();
    }
);