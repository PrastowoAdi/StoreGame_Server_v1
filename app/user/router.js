var express = require('express');
var router = express.Router();
const {viewSigning, actionSigning} = require('./controller');

router.get('/', viewSigning);
router.post('/', actionSigning);


module.exports = router;
