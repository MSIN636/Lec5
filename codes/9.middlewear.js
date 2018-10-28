var express = require('express');
var app = express();

app.use('/touro', function(req, res, next){      //Middleware function to log request protocol
    console.log("A request for things received at " + Date.now());
    next();
});

app.get('/touro', function(req, res){    		// Route handler that sends the response
    res.send('welcome to Touro College');
});

app.listen(8080);
