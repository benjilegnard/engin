define(["jquery","backbone"],function($, Backbone){
    "use strict";
    var DocumentationView = Backbone.View.extend({

        events: {
            'click .close': 'close'
        },

        initialize: function() {
            this.template = _.template($('#modal-template').html());
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        show: function() {
            $(document.body).append(this.render().el);
        },

        close: function() {
            this.remove();
        }

    });
    return DocumentationView;
});