exports.index = function (req, res, next) {
    res.render('index');
};

exports.fiddler = {
    index:function (req, res, next) {
        res.render('fiddler');
    }
};
exports.coder = {

    index:function (req, res, next) {
        res.render('coder');
    }
};
exports.writer = {

    index:function (req, res, next) {
        res.render('writer');
    }
};
