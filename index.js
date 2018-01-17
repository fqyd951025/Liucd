let exp = require('express');
let app = exp();
let bodyParser = require('body-parser');

app.use(exp.static(__dirname+"/html"));
app.use(bodyParser.urlencoded({ extended : true }));
app.use('/',require('./js/routers/index.js'));
app.set('views', __dirname+"/views");
app.set('view engine', 'ejs');

app.listen(666,function(){
	console.log('服务已启动...')
})
