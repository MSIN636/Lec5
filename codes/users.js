var express= require('express');
var router = express.Router();
router.get('/', function(req,res){
    res.send('GET request on users route');
});
router.post('/', function(req,res){
    res.send('POST request on users route');
});
module.exports =router;
