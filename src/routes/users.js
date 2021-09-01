const express = require('express');
const router = express.Router();
const {register,login} = require('../controllers/usersController');

router.get('/registro', register);
router.get('/login', login);

module.exports = router;