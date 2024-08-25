var express = require('express');
var router = express.Router();
var {getTenant, postTenant, patchTenant, deleteTenant} = require('./../controllers/tenant');

router.get('/', getTenant)

router.post('/', postTenant)

router.patch('/', patchTenant)

router.delete('/', deleteTenant)

module.exports = router;