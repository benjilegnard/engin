define(
    [
        "jquery",
        "backbone",
        "engine/models/PageModel",
        "engine/collections/PageCollection"
    ],
    function($, Backbone, PageModel, PageCollection) {

        var ThumbnailsView = Backbone.View.extend({

            events: {
                'click .crea': 'voirCrea',
                'click .real': 'voirReal'
            }
        });
        return ThumbnailsView;
    }
);