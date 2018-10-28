var express =require('express');
var app = express();

app.get('/:product/:id', function(req,res){
    res.send('your product is '+req.params.product+' and the id is '+req.params.id);
});
app.listen(8080);

