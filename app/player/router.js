var express = require('express');
var router = express.Router();
const { landingPage, detailPage } = require('./controller');

router.get('/landingpage', landingPage);
router.get('/:id/detail', detailPage);
// router.get('/create', viewCreate);
// router.post('/create', actionCreate);
// router.get('/edit/:id', viewEdit);
// router.put('/edit/:id', actionEdit);
// router.delete('/delete/:id', actionDelete);
// router.put('/status/:id', actionStatus);

module.exports = router;
