let exp = require('express');
let router = exp.Router();

router.get('/sign', function(req,res){
	res.send('ok');
});

module.exports = router;