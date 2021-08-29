const usuarios = ['Ada', 'Greta', 'Vim', 'Tim'];

module.exports = (req, res, next) => {
    if (admins.includes(req.query.user)) {
        next();
    } else {
        res.send('No tienes los privilegios para ingresar');
    }
}