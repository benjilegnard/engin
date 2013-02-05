define(["jquery","backbone"],function($, Backbone){
    "use strict";
    var CarouselView = Backbone.View.extend({

        events: {
            'click .crea': 'voirCrea',
            'click .real': 'voirReal'
        }
    });
    return CarouselView;
});