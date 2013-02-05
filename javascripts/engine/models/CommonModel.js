define(["jquery", "backbone"], function($, Backbone) {
    /**
     * Common, contient les données de /data/commons.json via l'api.
     * @type {*}
     */
    var Common = Backbone.Model.extend(
        {

            // Faq Constructor
            initialize: function() {

            },

            // Default values for all of the Common Model attributes
            defaults: {
                "name":"Common #0"
            }
        }
    );
    // Returns the Model class
    return Common;

});