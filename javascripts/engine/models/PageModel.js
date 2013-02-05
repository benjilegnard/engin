define(["jquery", "backbone"], function($, Backbone) {

    var Page = Backbone.Model.extend(
        {

            // Page Constructor
            initialize: function() {

            },

            // Default values for all of the Page Model attributes
            defaults: {
                "key"   :   "",
                "title"         :"",
                "description"   :"",
                "background"    :"bg_obj1.jpg",
                "content":
                {

                },
                "path":
                [
                    {"title":"Maquettes","url":"/maquettes/index.html"}
                ]
            }
        }
    );
    // Returns the Page class
    return Page;

});