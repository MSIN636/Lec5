var express =require('express');
var app = express();
app.get('/touro', function(req,res){
    res.send('<b>Welcome to toruo </b>');
});
app.listen(8080);
