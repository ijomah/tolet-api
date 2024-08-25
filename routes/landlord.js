var express = require('express');
var router = express.Router();
var {getLandlord, postLandlord, patchLandlord, deleteLandlord} = require('./../controllers/landlord');

router.get('/', getLandlord)

router.post('/', postLandlord)

router.patch('/', patchLandlord)

router.delete('/', deleteLandlord)

module.exports = router;