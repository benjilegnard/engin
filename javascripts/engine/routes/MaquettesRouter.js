define(
    [
        "domReady",
        "jquery",
        "backbone",
        "underscore",

        "engine/views/ThumbnailView",
        "engine/views/CarouselView",
        "engine/views/DocumentationView",
        "engine/views/HeaderView",
        "engine/views/ModalView",
        "engine/views/ProgressView",

        "engine/views/SpecsRunnerView",
        "engine/views/TestsRunnerView",

        "engine/views/PageView",
        "engine/models/PageModel",
        "engine/collections/PageCollection",

        "engine/views/PageView",
        "engine/models/PageModel",
        "engine/collections/PageCollection",

        "engine/views/PageView",
        "engine/models/PageModel",
        "engine/collections/PageCollection"
    ],
    function(domReady, $, Backbone, _, ThumbnailView, ModalView, PageModel ){

        /**
         * Routeur du moteur de maquettes (page d'accueil)
         * @type {*} Backbone.Router
         */
        var MaquettesRouter = Backbone.Router.extend({

                routes:
                {
                    ""                       : "thumbnails",
                    "help"                   : "help",      // #help
                    "carousel"               : "carousel",    // #carousel
                    "zoom/:name"             : "zoom",  // #zoom/1-home-page
                    "image/:name/:size"      : "image",  // #image/1-home-page/(mobile|tablet|desktop|wide-screen)
                    "page/:name"             : "layout",   // #search/kiwis/p7
                    "page/:name/:size" : "popup"   //#page/1-home-page/320x240
                },
                /**
                 * Accueil / Thumbnails
                 */
                thumbnails: function() {
                    //console.log("#thumbnails");
                },
                /**
                 * Section carousel
                 */
                carousel: function() {
                    //console.log("#carousel");
                },
                /**
                 * Help Modal
                 */
                help: function() {

                    //console.log("#help");
                    var model = new Backbone.Model({ title: 'Example Modal', body: 'Hello World' });

                    $('#show-modal').click(function() {
                        var view = new ModalView({ model: model });
                        view.show();
                    });

                },
                /**
                 * Zoom Modal
                 */
                zoom: function(name) {

                    //console.log("#zoom");
                    var zoomModel = new Backbone.Model(
                        { title: 'Zoom', body: 'data' }
                    );
                    var view = new ImgZoomView({model:zoomModel})
                },
                /**
                 *
                 * @param name le nom du gabarit
                 * @param size la taille
                 */
                layout: function(name, size) {

                    //console.log("#layout/"+name);
                } ,

                image: function(name, size) {

                } ,

                popup: function(name, size) {
                    var options = {};
                    window.open(name + '.html', 'etremarin_popup', options);
                }
            }
        );

        return MaquettesRouter;
    });