(function(exports){
    'use strict';
    var models = require('./models');

    var CrudService = function(modelClass){
        return {
            "query":function(req,res,next){
                modelClass.find(req.query)
                    .success(function(){

                    })
                    .error(function(){

                    })
            },
            "create":function(req,res,next){
                modelClass.build(req.query)
                    .success(function(){

                    })
                    .error(function(){

                    })
            },
            "update":function(req,res,next){

                modelClass.update(req.query)
                    .success(function(){

                    })
                    .error(function(){

                    })
            },
            "options":function(req,res,next){

            },
            "delete":function(req,res,next){

            }
        }
    };

    exports.users = CrudService(models.User);

    exports.project = CrudService(models.Project);
    exports.documents = CrudService(models.Document);
    exports.rendition = CrudService(models.Rendition);


})(module.exports);