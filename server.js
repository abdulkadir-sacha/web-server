var express = require('express')
var app = express()
var PORT=3000;
 
var middleware={

			requireAuthetication : function(req,res,next){
				console.log('private route hit');
				next();
			},
			logger : function(req,res,next){
				console.log('Request:'+req.method +' '+req.originalUrl+'  '+ new Date().toString() );
				next();
			}
} ;
  	
  app.use(middleware.logger);	


app.get('/about',middleware.requireAuthetication, function (req, res) {
  res.send('About Us')
});

 app.use(express.static(__dirname +'/public'));

app.listen(PORT,function(){

	console.log('Server Started at port no '+PORT);
});