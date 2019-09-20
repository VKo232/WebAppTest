// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db"
// node entry.js 

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var cors = require('cors');

var app = express();

const route = require('./route/routes.js');

mongoose.connect('mongodb://localhost:27017/webapptest', { useNewUrlParser: true, useUnifiedTopology: true });

// on connection
mongoose.connection.on('connected', ()=>{
	console.log("connected");
});


// on failure
mongoose.connection.on('error', (err) => {
	console.log(err);
});

const PORT = 3000;

//adding middleware - CORS

app.use(cors());

//body-parser

app.use(bodyparser.json());

app.use('/api', route); // will direct all server/api requests to route

// GET
app.get('/', (req,res)=>{
	res.send("something happned");
});

app.listen(PORT, ()=> {
	console.log('server has been started');
});

