module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('home.html')
     });

     app.get('/forUser/',function(req,res){
        res.render('forUser.html');
    });

    app.get('/forProvider/',function(req,res){
        res.render('forProvider.html');
    });
}