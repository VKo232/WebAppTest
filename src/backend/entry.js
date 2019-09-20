var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var cors = require('cors');

var app = express();

mongoose.connect('mongodb://localhost:27017/webapptest');

// on connection
mongoose.connection.on('connected', ()=>{
	console.log("connected");
});

const PORT = 3000;

app.listen(port, ()=> {
	console.log('server has been started');
});

