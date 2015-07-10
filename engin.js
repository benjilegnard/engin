var express = require('express')
    , fs = require('fs')
    , http = require('http')
    , path = require('path')
    , log4js = require('log4js')
    , bodyParser = require('body-parser')
    , errorHandler = require('errorhandler')
    , cookieParser = require('cookie-parser')
    , methodOverride= require('method-override')
    , session = require('express-session')
    , lessMiddleware = require('less-middleware')
    , favicon = require('serve-favicon')
//  , passport      = require('passport')
    , multer      = require('multer')
    , Sequelize = require('sequelize')
    , pg = require('pg')
    , restful = require('sequelize-restful')
    , models = require('./app/models')
    , routes = require('./app/routes')
    , app = require('express')()
    , server = http.createServer(app)
    , io = require('socket.io');


log4js.configure({
    appenders:[
        { type:'console' },
        { type:'file', filename:'logs/engin.log', category:'global' }
    ]
});


var logger = log4js.getLogger('engin');
logger.setLevel('INFO');
// all environments
app.set('port', port = process.env.PORT || 5000);

//view directory
app.set('views', __dirname + '/views');

//handlebars .html views
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cookieParser('your secret here'));
app.use(session({ resave: true,
    saveUninitialized: true,
    secret: 'uwotm8' }));
app.use(multer());
//app.use(models);
//less to css automatic compilatin
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
//static resources
app.use(express.static(path.join(__dirname, 'public')));

// define all your models before the configure block
/*
app.configure(function () {
    app.use(restful(Sequelize, {

    }))
});
*/

allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return next();
};
if ('development' == app.get('env')) {
    app.use(errorHandler({
        dumpExceptions:true,
        showStach:true
    }));
    //return database_options.logging = true;
}
if ('production' == app.get('env')) {
    app.use(errorHandler());
}

//html files
app.get('/', routes.index);

app.get('/projects', routes.index);
app.get('/coder', routes.coder);
app.get('/writer', routes.writer);
app.get('/fiddler', routes.fiddler);

app.get('/api/name', function (req, res) {
    res.json({name:'Bob'})
});

//partials for angular
app.get('/partial/:name', function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
});
//resources loaded from bower dir
app.get('/js/libs/:file', function(req, res){
    var file = req.params.file,
        filePath = path.join(__dirname,'/app/bower_components/',file,'.js');
    var fileExists =
        fs.exists(
            filePath,
            function(err,data){
                if(err) res.send(500,err);
                else res.send(data);
            }
        );
    if (fileExists) {
        res.sendfile('/uploads/' + uid + '/' + file);
    } else {
        res.status(403).send('Sorry! you cant see that.');
    }
});
//rest api
//app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'))
});
/*
 var sequelize = new Sequelize('database', 'username', 'password', {
 // custom host; default: localhost
 host: 'my.server.tld',

 // custom port; default: 3306
 port: 12345,

 // custom protocol
 // - default: 'tcp'
 // - added in: v1.5.0
 // - postgres only, useful for heroku
 protocol: null,

 // disable logging; default: console.log
 logging: false,

 // max concurrent database requests; default: 50
 maxConcurrentQueries: 100,

 // the sql dialect of the database
 // - default is 'mysql'
 // - currently supported: 'mysql', 'sqlite', 'postgres'
 dialect: 'mysql',

 // the storage engine for sqlite
 // - default ':memory:'
 storage: 'path/to/database.sqlite',

 // disable inserting undefined values as NULL
 // - default: false
 omitNull: true,

 // Specify options, which are used when sequelize.define is called.
 // The following example:
 //   define: {timestamps: false}
 // is basically the same as:
 //   sequelize.define(name, attributes, { timestamps: false })
 // so defining the timestamps for each model will be not necessary
 // Below you can see the possible keys for settings. All of them are explained on this page
 define: {
 underscored: false,
 freezeTableName: false,
 syncOnAssociation: true,
 charset: 'utf8',
 collate: 'utf8_general_ci',
 classMethods: {method1: function() {}},
 instanceMethods: {method2: function() {}},
 timestamps: true
 },

 // similiar for sync: you can define this to always force sync for models
 sync: { force: true },

 // sync after each association (see below). If set to false, you need to sync manually after setting all associations. Default: true
 syncOnAssociation: true    ,

 // use pooling in order to reduce db connection overload and to increase speed
 // currently only for mysql and postgresql (since v1.5.0)
 pool: { maxConnections: 5, maxIdleTime: 30}
 });

 */