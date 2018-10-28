var express = require('express');
var app = express();
app.get('/', function(req,res){
	res.send('Welcome to <b>Express</b>')
});
app.listen(8080, function(){
	console.log('server is running on port 8080')
})