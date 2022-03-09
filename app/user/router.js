var express = require('express');
var router = express.Router();
const {viewSigning, actionSigning, actionLogout} = require('./controller');

router.get('/', viewSigning);
router.post('/', actionSigning);
router.get('/logout', actionLogout);


module.exports = router;
