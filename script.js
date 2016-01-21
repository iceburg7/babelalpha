$(document).ready(function(){

	console.log("it works.");
	
	
	//Initiates and controls the intro sequence.
	var introstate = 0;
	
	
	
	
	
	//functions to hide or show divs
	var hide = function(y){
		console.log("hiding "+y);
		$(y).removeClass("show");
		$(y).addClass("hide");
	}
	
	var show = function(y){
		console.log("showing "+y);
		$(y).removeClass("hide");
		$(y).addClass("show");
	}
	
	//function to display an image to the wrapper
	var i = function(y){
		var z = ("url(images/" + y + ")");
		console.log(z);
		$(".wrapper").css("backgroundImage", z);
	};
	
	//load the title image
	i("title.jpg");
	
	
	
	
	//On clicking on the screen, change to the next image.
	
	$(document).on("click",".wrapper",function(){
		if(introstate < 8){
			switch(introstate){
				case 0:
					i("title2.jpg");
					introstate = 1;
					break;
				case 1:
					i("title3.jpg");
					introstate = 2;
					break;
				case 2:
					show(".textbox");
					introstate = 3;
					break;
				case 3:
					$(".textbox").css("color", "black")
					i("babel-outside.gif");
					introstate = 4;
					break;
			}
		}
	});
	
	
	
	
	
	
	
	
	
	
	
});