var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 5000);
var path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/build/index.html');
});
