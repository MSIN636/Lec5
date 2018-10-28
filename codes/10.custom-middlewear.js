
var express =require('express');
var app = express();

// define the middleware
var forbidder = function(forbidden_day) {
	var days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday','Friday', 'Saturday'];
	return function(req, res, next) {
	// get the current day
    var day = new Date().getDay();
    if (days[day] === forbidden_day) {
		res.send('No visitors allowed on ' + forbidden_day + 's!');
    }else { next(); }
   }
};

// use the forbidder middleware
app.use(forbidder('Sunday'));

app.get('/', function(req,res){
	res.send('Welcome to <b>Express</b>')
});

app.listen(8080);
