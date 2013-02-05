define(["jquery", "backbone"], function($, Backbone) {

    var Progress = Backbone.Model.extend(
        {

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the User Model attributes
            defaults: {

                firstname: "",

                lastname: "",

                email: "",

                login: ""

            }
        }
    );
    // Returns the Model class
    return Progress;

});