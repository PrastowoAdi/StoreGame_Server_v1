var express = require('express');
var router = express.Router();
const { landingPage, detailPage, category, checkout } = require('./controller');
const { isLoginPlayer } = require('../middleware/auth')
router.get('/landingpage', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);
router.post('/checkout', isLoginPlayer, checkout);
// router.get('/create', viewCreate);
// router.post('/create', actionCreate);
// router.get('/edit/:id', viewEdit);
// router.put('/edit/:id', actionEdit);
// router.delete('/delete/:id', actionDelete);
// router.put('/status/:id', actionStatus);

module.exports = router;
