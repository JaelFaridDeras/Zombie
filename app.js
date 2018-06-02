var http= require('http');
var path= require('path');
var express= require('express');

var app = express();
app.set('views',path.relative(__dirname,'views'));
var publicPath = path.join(__dirname,'public');
app.use('/clases', express.static(publicPath));
app.set('view engine','ejs');
app.get('/',(Request,Response)=> Response.render('index'));
app.get('/tipos',(Request,Response)=> Response.render('tipos'));
app.get('/victimas',(Request,Response)=> Response.render('victimas'));
app.get('/clases',(Request,Response)=> Response.render('clases'));




app.use((Request,Response)=>{
    Response.writeHead(200,{'Conten-Type':'text/plain'});
    Response.end('no se encuentra la imagen');

});


app.use((Request,require)=> Response.status(400).render('400'));
http.createServer(app).listen(3000,()=>
    console.log('la aplicacion esta escuchando por el puerto 3000')
);