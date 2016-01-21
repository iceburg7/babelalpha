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
		if(introstate < 10){
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
					show(".subtitletextbox");
					introstate = 3;
					break;
				case 3:
					$(".subtitletextbox").css("color", "black")
					i("babel-outside.gif");
					introstate = 4;
					break;
				case 4:
					show(".textboxleft");
					show(".textboxright");
					introstate = 5;
					break;
				case 5:
					$(".textboxleft").append("<br><br>First, myself.  Mostly as I knew myself to be,<br> though my eyesight had deteriorated significantly.");
					introstate = 6;
					break;
				case 6:
					$(".textboxright").append("<br><br>Second, a tiny copy of myself, no larger than<br>the palm of my hand.");
					introstate = 7;
					break;
				case 7:
					$(".textboxleft").append("<br><br>This tiny man was identical to me in every aspect <br>save for size; but he possessed two things that I did not:          ");
					introstate = 8;
					break;
				case 8:
					$(".textboxright").append("<br><br>He still maintained his full eyesight, or perhaps he had a tiny pair of spectacles.");
					introstate = 9;
					break;
				case 9:
					$(".textboxleft").append("<br><br>And he had a plan.<br>  Our separation must have been in error, and in order<br>to reunite ourselves and set things right,<br>we must travel to the center of Babel Alpha.");
					introstate = 10;
					break;
			}
		}
	});
	
	
	
	
	
	
	
	
	
	
	
});