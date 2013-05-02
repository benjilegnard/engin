var Sequelize = require('sequelize-postgres').sequelize
var postgres  = require('sequelize-postgres').postgres

var sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'postgres'
}),
    models = { };
models.Document

id REQUIRED
repositoryId REQUIRED
name REQUIRED
baseType REQUIRED (document|folder)
type REQUIRED — This is the type you can freely define.
    parentId OPTIONAL
renditions OPTIONAL
localName OPTIONAL
createdBy OPTIONAL
creationDate OPTIONAL
lastModifiedBy OPTIONAL
lastModificationDate OPTIONAL
length OPTIONAL
mimeType OPTIONAL
fileName OPTIONAL
url OPTIONAL

models.Folder

id REQUIRED
repositoryId REQUIRED
name REQUIRED
baseType REQUIRED (document|folder)
type REQUIRED
parentId REQUIRED
localName OPTIONAL
createdBy OPTIONAL
creationDate OPTIONAL
lastModifiedBy OPTIONAL
lastModificationDate OPTIONAL

models.Rendition  =

documentId ID REQUIRED identifies the rendition document (The baseType must be document)
url URL REQUIRED identifies the rendition stream.
    mimeType String REQUIRED The MIME type of the rendition stream.
    filename String REQUIRED The filename of the rendition stream
length Integer OPTIONAL The length of the rendition stream in bytes.
    name String OPTIONAL Human readable information about the rendition.
    kind String REQUIRED A categorization associated with the rendition. This is freely definable. An example could be:
    square – an image square 75×75
thumbnail – a thumbnail version of the object
small – 240 on longest side
medium- 500 on longest side
large – 1024 on longest side (only exists for very large original images)
docx – Microsoft docx Version of the content
lang_de – same content in German language
lang_fr – same content in French language
pdf – pdf version of the content
height Integer OPTIONAL Typically used for image type renditions (expressed as pixels). SHOULD be present if kind equals thumbnail.
    width Integer OPTIONAL Typically used for image type renditions (expressed as pixels). SHOULD be present if kind equals thumbnail.
