
var express = require('express');
var passport = require('passport');
var path = require('path'); 
var morgan = require('morgan');
var bodyParser =require('body-parser'); 
var favicon = require('serve-favicon'); 
var cookieParser = require('cookie-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose'),
assert = require('assert');  
var home = require('./routes/index');
var Software = require('./routes/Software');
var AI = require('./routes/AI');
var Network = require('./routes/Network');
var Tags = require('./routes/Tags');
var Project = require('./routes/Project');
var company = require('./routes/Company');
var session = require("express-session");
var hostname = 'localhost'; 
var port = 8080;
var app = express();
app.use(session({
  secret : 'ITEHeadStart',
  esave : true,
  saveUninitialized  :true
}))
app.use(passport.initialize());
app.use(passport.session());

var url = 'mongodb://beshr:beshr@ds241395.mlab.com:41395/headstart';
mongoose.connect(url,{useMongoClient:true});
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function () {console.log("Connected correctly to server"); });

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'jade'); 
 
app.use(morgan('dev')); 
app.use('/Software', Software);
app.use('/AI', AI);
app.use('/Network', Network);
app.use('/Tags', Tags);
app.use('/project',Project);
app.use('/company',company);
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public'))); 




app.listen(process.env.PORT || port, function(){ 

});


app.use(express.static(__dirname + '/dist'));

app.get('/home', function(req,res) {
	res.sendFile(path.join(__dirname+'/dist/index.html'));
});
