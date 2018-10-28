var express =require('express');
var app = express();
app.get('/touro', function(req,res){
    res.send('Touro College (This is response from <b> GET </b> Request)');});
app.post('/touro', function(req,res){
    res.send(Touro College (This is response from <b> POST </b> Request)');
});
app.listen(8080);
