const express = require('express');
const router = express.Router();
const {index,admin} = require('../controllers/mainController');
const logMiddleware = require('../middlewares/loginUser');

router.get('/', index);
router.get('/admin', logMiddleware, admin);

module.exports = router;