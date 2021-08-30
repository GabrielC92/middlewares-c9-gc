const express = require('express');
const router = express.Router();
const {register,login} = require('../controllers/usersController');
const logMiddleware = require('../middlewares/loginUser');

router.get('/registro', register);
router.get('/login', logMiddleware, login);

module.exports = router;