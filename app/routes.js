exports.index = function (req, res, next) {
    res.render('index');
};
var fiddler = {
        index:function (req, res, next) {
            res.render('fiddler');
        }
    },
    coder = {

        index:function (req, res, next) {
            res.render('coder');
        }
    },
    writer = {

        index:function (req, res, next) {
            res.render('writer');
        }
    }
exports.fiddler = fiddler;
