var express = require('express');
var router = express.Router();
var {getHouse, postHouse, patchHouse, deleteHouse} = require('./../controllers/house');

router.get('/', getHouse)

router.post('/', postHouse)

router.patch('/', patchHouse)

router.delete('/', deleteHouse)

module.exports = router;