var express =require('express');
var app = express();

app.get('/:name', function(req,res){
    res.send('nice to meet you '+req.params.name);
});
app.listen(8080);
