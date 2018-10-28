var express =require('express');
var app = express();

app.get('/:id([0-9]{5})', function(req,res){
    res.send('your product id is '+req.params.id);
});
app.listen(8080);
