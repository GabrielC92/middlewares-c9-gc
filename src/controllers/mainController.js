module.exports = {
    index: (req,res) => {
        return res.render('index',{
            title: 'Home Page'
        });
    },
    admin: (req,res) => {
        return res.render('admin/admin',{
            title: 'Admin',
            msg: req.query ? req.query.user : null
        });
    }
}