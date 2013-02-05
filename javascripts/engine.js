// Filename: engine.js
/**
 *
 * Doc : http://backbonetutorials.com/organizing-backbone-using-modules/
 */
// Require.js nous permet de créer des raccourcis vers les différentes librairies.

require.config({

    // Initialize the application with the main application file.

    baseUrl:"js/",

    paths: {
        // JavaScript folders.

        models:         "engine/models",
        collections:    "engine/collections",
        views:          "engine/views",

        // Libraries.
        "modernizr":      "libs/modernizr",
        "html5shiv":      "libs/html5shiv",
        "jquery":         "libs/jquery",
        "underscore":     "libs/lodash.underscore",
        "backbone":       "libs/backbone/backbone",
        "backbone.layoutManager"  :"libs/backbone/backbone.layoutmanager",

        "text"            :"libs/require/text",
        "domReady"        :"libs/require/domReady",
        "bootstrap-collapse":      "libs/bootstrap/bootstrap-collapse",
        "bootstrap-dropdown":      "libs/bootstrap/bootstrap-dropdown",
        "bootstrap-tooltip":      "libs/bootstrap/bootstrap-tooltip",
        "handlebars":     "libs/handlebars"
    },

    shim: {
        // Bootstrap a besoin de jQuery.
        "bootstrap-collapse": { deps: ["jquery"] },
        "bootstrap-dropdown": { deps: ["jquery"] },
        "bootstrap-tooltip": { deps: ["jquery"] },

        // Backbone library depends on lodash and jQuery.
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        "modernizr": {
            "exports": "Modernizr"
        },
        // Handlebars has no dependencies.
        handlebars: {
            exports: "Handlebars"
        }
    }

});
// Include Desktop Specific JavaScript files here (or inside of your Desktop router)
require(
    [
        "modernizr",
        "html5shiv",
        "jquery",
        "backbone",
        "engine/routes/MaquettesRouter",
        "bootstrap-collapse",
        "bootstrap-dropdown",
        "bootstrap-tooltip"
    ],
    function(Modernizr, $, Backbone, MaquettesRouter)
    {

        "use strict";
        var engine = {
            root:'/maquettes/'
        };
        // Define your master router on the application namespace and trigger all
        // navigation from this instance.
        engine.router = new MaquettesRouter();

        // Trigger the initial route and enable HTML5 History API support, set the
        // root folder to '/' by default.  Change in em.js.
        //Backbone.history.start({ pushState: true, root: engine.root });

        // All navigation that is relative should be passed through the navigate
        // method, to be processed by the router. If the link has a `data-bypass`
        // attribute, bypass the delegation completely.

        $(document).on("click", "a:not([data-bypass])", function(evt) {
            // Get the absolute anchor href.
            var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
            // Get the absolute root.
            var root = location.protocol + "//" + location.host + app.root;

            // Ensure the root is part of the anchor href, meaning it's relative.
            if (href.prop && href.prop.slice(0, root.length) === root) {
                // Stop the default event to ensure the link will not cause a page
                // refresh.
                evt.preventDefault();

                // `Backbone.history.navigate` is sufficient for all Routers and will
                // trigger the correct events. The Router's internal `navigate` method
                // calls this anyways.  The fragment is sliced from the root.
                Backbone.history.navigate(href.attr, true);
            }
        });

    }
);
