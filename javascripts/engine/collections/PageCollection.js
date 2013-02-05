define(["jquery", "backbone","engine/models/PageModel"], function($, Backbone, Page) {
    "use strict";

        var Pages = Backbone.Collection.extend({model: Page});

        return Pages;

});