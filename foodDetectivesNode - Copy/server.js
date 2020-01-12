var express = require("express")
//Express Object
var app = express();
var hbs = require ('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');// sets up the view
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));//looking for the public folder




  app.get('/',(req, res)=>{
    res.render('index.hbs');// this is the page
});//all can create pages
//render creates the page




app.all('/logmain', (req, res)=>{
    res.render('logmain.hbs');
    //all lets use port or get
    });



 


app.listen(4000, ()=>{
    console.log('server is up at localhost:4000');
    
    })