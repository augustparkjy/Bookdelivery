var express = require('express')
app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/home.html');
});


app.post('/Login/', function(req,res){
    var message = "<H3> Your ID is " + req.body.yourid + ", Your PASSWORD is " + req.body.yourpw + "</H3>";
    console.log(req.query);
    res.send(message);
})

// app.get('/user/:id/country/:ccc', function(req,res){
//     var message = "<H3> Hello " + req.params.id + "  " + req.params.ccc + "</H3>";
//     console.log(req.params);
//     res.send(message);
// })


// app.post('/SendMSg/', function(req,res){
//     var message = "<H3> Hello " + req.body.yourname + ", " + req.body.yourmsg + "</H3>";
//     console.log(req.query);
//     res.send(message);
// })

module.exports = app;