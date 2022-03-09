module.exports = {
    isLoginAdmin: (req, res, next) => {
        if(req.session.user === null || req.session.user === undefined){
            req.flash('alertMessage', `Session is end , please try login again`);
            req.flash('alertStatus', 'danger');
            res.redirect('/');
        } else {
            next();
        }
    }
}