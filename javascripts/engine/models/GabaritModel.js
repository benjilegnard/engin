define(["jquery", "backbone"], function($, Backbone) {

    var Crea = Backbone.Model.extend(
        {

            // Faq Constructor
            initialize: function() {

            },

            // Default values for all of the Faq Model attributes
            defaults: {
                "name":"Crea #0"
            }
        }
    );
    // Returns the Model class
    return Crea;

});