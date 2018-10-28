var express =require('express');
var app = express();
var usersRouter = require('./users.js');
app.use('/users',usersRouter);
app.listen(8080);
