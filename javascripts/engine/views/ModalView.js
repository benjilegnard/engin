define(["jquery","underscore","backbone"],function($, _, Backbone){
    "use strict";
    var ModalView = Backbone.View.extend({

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
    return ModalView;
});