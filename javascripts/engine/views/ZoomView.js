define(["jquery","underscore","backbone","views/ModalView"],function($, _, Backbone, ModalView){
    "use strict";

    var ImgZoomView = ModalView.extend({

        events: {
            'click .img-zoom': 'voirCrea',
            'click .close': 'voirReal'
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
    /*
     //vue backbone gérant le zoom / scroll avec hammer.js et mousewheel.js
     var fnZoom = function()
     {

     },
     fnZoomOut= function()
     {

     };
     // $('.em-img-zoom').bind('mousewheel', function(event, delta, deltaX, deltaY) {
     $('.em-img-zoom').mousewheel(function(event, delta, deltaX, deltaY) {
     //console.log(delta, deltaX, deltaY);

     });    */

    // zoom multi-touch
    $('.em-img-zoom').hammer(
        {
            drag_min_distance: 0,
            drag_horizontal: true,
            drag_vertical: true,
            transform: false,
            hold: false,
            prevent_default: true
        }
    ).bind( "drag",
        function(ev)
        {
            //console.log(ev.touches);

            //console.log(ev.position);

            $(this).find("img.em-img-inner").css({"left":"","top":""});
        }

    ).bind( "swipe",
        function(ev)
        {

        }
    );

    // side bar
    /*
     $('.subnav').affix({
     offset: {
     top: function () { return $(window).width() <= 980 ? 290 : 210 }

     }
     });
     $('.subnav').hammer(
     {
     drag_min_distance: 0,
     drag_horizontal: true,
     drag_vertical: true,
     transform: false,
     handle: '.subnav .atc-icon',
     prevent_default: true
     }
     ).bind(
     "drag",
     function(ev){

     $(".subnav").css(
     {
     'left': ev.currentTarget.css("left") + ev.distanceX,
     'top':ev.currentTarget.css("top") + ev.distanceY
     }
     );
     }
     );
     */
    //$('.em-recherche')
    //$('.em-navigation')
    //$('.em-molette')

});