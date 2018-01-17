let exp = require('express');
let router = exp.Router();

router.use('/', require('./sign'));
router.use('/', require('./login'));
router.use('/', require('./response'));

module.exports = router;