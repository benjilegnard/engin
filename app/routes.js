exports.index = function (req, res, next) {
        res.render('index');
};

exports.fiddler = function (req, res, next) {
        res.render('fiddler');
};
exports.coder = function (req, res, next) {
        res.render('coder');
};
exports.writer = function (req, res, next) {
        res.render('writer');
};
