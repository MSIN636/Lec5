var express = require('express'); 	
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
   res.render('index',{msg:'welcome to Touro College'});
});

app.listen(3000, function(){
  console.log('Express app started')
});
