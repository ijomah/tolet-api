var express = require('express');
var router = express.Router();
var {getLogin, postLogin, patchLogin, deleteLogin} = require('../controllers/login');

router.get('/', getLogin);

router.post('/', postLogin);

router.patch('/', patchLogin);

router.delete('/', deleteLogin);

module.exports = router;