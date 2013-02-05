define(
    ["jquery","backbone","engine/models/UserModel"],
    function ($,Backbone, User ) {
        var Users = Backbone.Collection.extend({model: User});

        return Users;
    }
);

