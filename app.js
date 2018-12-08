var express = require('express')
app = express();
var http = require('http')
var router = require('./router/main')(app);
var mysql = require('mysql')
server = http.createServer(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: '3306'
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT

});

con.connect(function(err) {
    if (err) throw err;
    con.query("use bd");
    con.query("SELECT * FROM test", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

// con.end();

server.listen(8081, function(){
    console.log('Express server listening on port ' + server.address().port);
});