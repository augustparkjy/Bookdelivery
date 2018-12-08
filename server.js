var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8000, function(){
    console.log('Express server listening on port ' + server.address().port);
})
app.use(express.static('public'));

var express = require('express')
app = express();
http = require('http'),
server = http.createServer(app);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extened: false}));
app.use(bodyParser.json());



// module.exports = app;
// server.listen(8081, function(){
//     //listen 성공했을 때 
//     console.log('Express server listening on port ' + server.address().port);
// });


