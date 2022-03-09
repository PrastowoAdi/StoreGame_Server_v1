var express = require('express');
var router = express.Router();
const {viewSigning} = require('./controller');

/* GET home page. */
router.get('/', viewSigning);
// router.get('/create', viewCreate);
// router.post('/create', actionCreate);
// router.get('/edit/:id', viewEdit);
// router.put('/edit/:id', actionEdit);
// router.delete('/delete/:id', actionDelete);
// router.put('/status/:id', actionStatus);

module.exports = router;
