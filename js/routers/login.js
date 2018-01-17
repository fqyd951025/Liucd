let exp = require('express');
let router = exp.Router();

router.get('/login', function(req,res){
	res.send('ok');
});

module.exports = router;