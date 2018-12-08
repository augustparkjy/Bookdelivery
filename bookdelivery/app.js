var express = require('express')
app = express();
var http = require('http')
var router = require('./router/main')(app);

server = http.createServer(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// app.get('/', function(req, res) {
//     res.sendFile(__dirname+ '/home.html');
// });

// app.post('/Login/', function(req,res){
//     var message = "<H3> Your ID is " + req.body.yourid + ", Your PASSWORD is " + req.body.yourpw + "</H3>";
//     console.log(req.query);
//     res.send(message);
// })

server.listen(8081, function(){
    console.log('Express server listening on port ' + server.address().port);
});