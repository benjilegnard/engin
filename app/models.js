(function (module) {

    "use strict";

    var Sequelize = require('sequelize-postgres').sequelize
        , log4js = require('log4js')
        , sequelize = new Sequelize('engin', 'engin', 'engin', {
            dialect:'postgres', port:5432
        })
        , logger = log4js.getLogger();

    /**
     * models namespace .
     * @type {*}
     */
    var models = {User:{}, Folder:{}, Document:{}, Rendition:{}, Repository:{}};

    models.User = sequelize.define('User', {
        id:{ type:Sequelize.INTEGER, primaryKey:true, autoIncrement:true },

        login:{type:Sequelize.STRING, unique:true},

        // authentification token
        token:{ type:Sequelize.STRING},

        // setting no title will throw an error when trying to save
        hash:{ type:Sequelize.STRING, allowNull:false},

        //mail adress
        email:Sequelize.STRING,
        //first name
        firstname:Sequelize.STRING,

        //last name
        lastname:Sequelize.STRING,

        // false deletion
        deleted:{ type:Sequelize.BOOLEAN, allowNull:true, defaultValue:false}

    }/*,
     {
     instanceMethods:{
     getFullname:function () {
     return [this.firstname, this.lastname].join(' ')
     }
     }
     }*/);

    // Example:  User.build({ firstname: 'foo', lastname:  ''    });
    models.Document = sequelize.define('Document', {

        id:{ type:Sequelize.INTEGER, primaryKey:true, autoIncrement:true },
        repositoryId:Sequelize.INTEGER, //REQUIRED
        name:{ type:Sequelize.STRING, allowNull:false},
        //baseType : Sequelize.STRING, //REQUIRED (document|folder)
        type:Sequelize.STRING, //REQUIRED — This is the type you can freely define.
        parentId:Sequelize.STRING, //OPTIONAL
        renditions:Sequelize.STRING, //OPTIONAL
        localName:Sequelize.STRING, //OPTIONAL
        createdBy:Sequelize.STRING, //OPTIONAL
        modifiedBy:Sequelize.STRING,
        length:Sequelize.INTEGER,
        mimeType:Sequelize.STRING,
        fileName:Sequelize.STRING,
        url:Sequelize.STRING

    });
    // FOLDER
    models.Folder = sequelize.define('Folder', {

        id:{ type:Sequelize.INTEGER, primaryKey:true, autoIncrement:true },
        repositoryId:Sequelize.STRING, //REQUIRED
        name:Sequelize.STRING, //REQUIRED
        baseType:Sequelize.STRING, //REQUIRED (document|folder)
        type:Sequelize.STRING, //REQUIRED
        parentId:Sequelize.STRING, //REQUIRED
        localName:Sequelize.STRING, //OPTIONAL
        createdBy:Sequelize.STRING, //OPTIONAL
        modifiedBy:Sequelize.STRING //OPTIONAL
    });

    // RENDITION

    models.Rendition = sequelize.define('Rendition',
        {
            id:{ type:Sequelize.INTEGER, primaryKey:true, autoIncrement:true },
            // documentId ID : Sequelize.STRING, //REQUIRED
            url:Sequelize.STRING, //URL : Sequelize.STRING, //REQUIRED identifies the rendition stream.
            mimeType:Sequelize.STRING, //: Sequelize.STRING, //REQUIRED The MIME type of the rendition stream.
            filename:Sequelize.STRING, //: Sequelize.STRING, //REQUIRED The filename of the rendition stream
            length:Sequelize.INTEGER, //: Sequelize.STRING, //OPTIONAL The length of the rendition stream in bytes.
            name:Sequelize.STRING, //: Sequelize.STRING, //OPTIONAL Human readable information about the rendition.
            kind:Sequelize.STRING, //: Sequelize.STRING, //REQUIRED A categorization associated with the rendition. This is freely definable. An example could be:

            // square – an image square 75×75
            // thumbnail – a thumbnail version of the object
            // small – 240 on longest side
            // medium- 500 on longest side
            //  large – 1024 on longest side (only exists for very large original images)
            //  docx – Microsoft docx Version of the content
            //  lang_de – same content in German language
            // lang_fr – same content in French language
            //  pdf – pdf version of the content

            height:Sequelize.INTEGER, // : Sequelize.STRING, //OPTIONAL Typically used for image type renditions (expressed as pixels). SHOULD be present if kind equals thumbnail.
            width:Sequelize.INTEGER //: Sequelize.STRING, //OPTIONAL Typically used for image type renditions (expressed as pixels). SHOULD be present if kind equals thumbnail.
        }
    );

    /**
     * Repository
     * @namespace models
     * @type {Repository}
     */
    models.Repository = sequelize.define('Repository', {

        id:{ type:Sequelize.STRING, primaryKey:true}
    });
    // ASSOCIATIONS


    //Document associations

    models.Document.hasOne(models.Document, {foreignKey:'parentId'});
    models.Document.hasOne(models.Repository, {foreignKey:'repositoryId'});
    models.Document.hasOne(models.User, {foreignKey:'createdBy'});
    models.Document.hasOne(models.User, {foreignKey:'lastModifiedBy'});

    models.Folder.hasOne(models.Repository, {foreignKey:'repositoryId'});

    //identifies the rendition document (The baseType must be document)
    models.Rendition.hasOne(models.Document, {foreignKey:'documentId'});


    // UPDATE / SYNCHRONIZATION
    /*
     sequelize.sync().success(function (hey) {
     // woot woot
     logger.info("Sucessful sync of the database" + hey)
     }).error(function (error) {
     // whooops
     logger.error(error);

     });
     */
    module.exports = models;


})(module);