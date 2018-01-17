let exp = require('express');
let router = exp.Router();

router.get('/send', function(req,res){
	res.send('ok');
});

router.get('/json', function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	res.json({name:'json'});
});

router.get('/redirect',function(req,res){
	res.redirect("http://www.baidu.com");
});

router.get('/sendFile', function(req,res){
	res.sendFile('/file.txt');
});

router.get('/download', function(req,res){
	res.download('/file.txt');
});

router.get('/render', function(req,res){
	var json = {
		"status":200,
		"stuArray":[
	        {
	            "name": "Google",
	            "url": "http://www.google.com"
	        },
	        {
	            "name": "Baidu",
	            "url": "http://www.baidu.com"
	        },
	        {
	            "name": "SoSo",
	            "url": "http://www.SoSo.com"
	        }
	    ]
	};
	//跨域问题解决
	res.header('Access-Control-Allow-Origin','*');
	res.render('homePage',json);	//渲染数据到ejs 页面上
});

module.exports = router;