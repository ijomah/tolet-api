var express = require('express');
var router = express.Router();
var {getRegister, postRegister, patchRegister, deleteRegister} = require('../controllers/register');

// router.get('/', getRegister);

router.post('/', postRegister);

// router.patch('/', patchRegister);

// router.delete('/', deleteRegister);

module.exports = router;