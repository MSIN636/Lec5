var express = require('express');
var app = express();

app.get('/touro', function(req, res) {
  res.send('/touro Patern');
});

app.get('/tou?ro', function(req, res) {
  res.send('/tou?ro Pattern');
});

app.get('/tou+ro', function(req, res) {
  res.send('/tou+ro Pattern' );
});

app.get('/tou*ro', function(req, res) {
  res.send('tou*ro');
});

app.get('/to(ur)?o', function(req, res) {
  res.send('/to(ur)?o Pattern');
});

app.listen(8080, function(){
	console.log('server is running on port 8080');
});