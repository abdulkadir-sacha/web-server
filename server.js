var express = require('express')
var app = express()
var PORT=process.env.PORT||3000;
 
 var middleware=require("./middleware.js")

  app.use(middleware.logger);	


app.get('/about',middleware.requireAuthetication, function (req, res) {
  res.send('About Us ! Yo')
});

 app.use(express.static(__dirname +'/public'));

app.listen(PORT,function(){

	console.log('Server Started at port no '+PORT);
});