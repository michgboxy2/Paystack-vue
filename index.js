const express 	= require("express"),
	
	  app			= express();




	app.use(express.static(__dirname + "/dist"));



	var PORT = process.env.PORT || 80

	app.listen(PORT, () => {
		console.log("server started" + PORT);
	}); 