$(document).ready(function() {


function audioPlay() {
                var audio = document.getElementById("player");
                if (audio.paused) {
                    audio.play();
                }else{
                    audio.pause();
                }

            }
            console.log("about to play Travelling song");

            audioPlay();




var questionNumber = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 0;
var incorrectHasBeenClicked;
var correctHasBeenClicked;


var triviaQnA = [
{
	id: "Q1",
	question:"How many stars are there on the flag of China?",
	options: ["One (1)", "Two (2)", "Seven 7"],
	rightAnswer: "Five (5)"


},{
	id: "Q2",
	question:"What is the currency of Mongolia?",
	options: ["Yena", "Kirgin", "Topchok" ],
	rightAnswer: "Tugrik" 

},{
	id: "Q3",
	question:"In which country is there a natural gas pit nicknamed the &ldquo;Door	to Hell&rdquo; that has been on fire since 1971?",
	options: ["Azerbaijan", "Bulgaria", "Iceland"],
	rightAnswer: "Turkeministan" 

	
},{
	id: "Q4",
	question:"In 2013 which two airlines merged to become the world’s largest airline?",
	options: ["Air France and KLM", "British Airways and Iberia", "Lufthansa and Germanwings" ],
	rightAnswer: "American Airlines and US Airways" 

},{
	id: "Q5",
	question:"Which celebrity was carried by their minders along the Great Wall of China?",
	options: ["Lady Gaga", "Beyonce", "Daniel Radcliffe" ],
	rightAnswer: "Justin Beiber" 

},{
	id: "Q6",
	question:"In 1976, Saigon changed its name to …?",
	options: ["Pattaya", "Saigon City", "Hanoi" ],
	rightAnswer: "Ho Chi Minh City" 

},{
	id: "Q7",
	question:"Which country has more lakes than the rest of the world combined?",
	options: ["Finland", "China", "Norway" ],
	rightAnswer: "Canada" 

},{
	id: "Q8",
	question:"Which country has the world's highest waterfall?",
	options: ["USA", "Brazil", "Japan" ],
	rightAnswer: "Venezuala" 

},{
	id: "Q9",
	question:"Is Scandinavia in the north, west, east or south of Europe?",
	options: ["West", "South", "East" ],
	rightAnswer: "North" 

},{
	id: "Q10",
	question:"Which country is also called the Hellenic Republic",
	options: ["France", "Germany", "Hungary" ],
	rightAnswer: "Greece" 

},{
	id: "Q11",
	question:"How tall is the Eiffel Tower?",
	options: ["500 feet", "1200 feet", "867 feet" ],
	rightAnswer: "984 feet" 

},{
	id: "Q12",
	question:"To the nearest thousand, how many islands does Indonesia have?",
	options: ["One (1)", "Eight (8)", "Thirty (30)" ],
	rightAnswer: "Thirteen (13)" 

}]



var triviaLength = triviaQnA.length;

var delay = 0;
	

$.each(triviaQnA, function(){

	var currentQuestion = this;

	setTimeout(function(){


		var counter = 8;
		var interval = setInterval(function() {
    		counter--;
    				
    		$("#counter").empty();		
    		$("<div class='count'></div>").html("Time Remaining: " + counter +  " " + "Seconds").appendTo("#counter");
    		if (counter == 0){
        		clearInterval(interval);
        		
        		$("#msgForUser").empty();
    			$("#counter").empty();		
    			$("<div class='count'></div>").html("Time Is Up! Next Question").appendTo("#counter");
    			incorrectHasBeenClicked = false;
				correctHasBeenClicked = false;

    		}

    		if ((counter == 0) && (questionNumber === triviaLength)) {
        		clearInterval(interval);
        		$("#msgForUser").empty();
    			$("#counter").empty();		
    			$("<div class='count'></div>").html("Game Is About To Restart").appendTo("#counter");

    			reinitializeTimeout();

    		}

		}, 1000);

		console.log(currentQuestion);

		questionNumber++;
		console.log(questionNumber);
		
		$("#questionNumber").empty();
		var questionNum = toWords(questionNumber);
		console.log(questionNum);
		$("<div class='text'></div>").html("This is question number " + questionNum).appendTo("#questionNumber");


		$("#questions").empty();
		$("<div class='text1'></div>").html(currentQuestion.question).appendTo("#questions");

		$("#options").empty();
		for (var i = 0; i < currentQuestion.options.length; i++){
			console.log(currentQuestion.options[i]);
			$("<button class='col-md-12 button wrong'></button>").html(currentQuestion.options[i]).appendTo("#options");
		}

		$("#correct").empty();
		$("<button class='col-md-12 button right'></button>").html(currentQuestion.rightAnswer).appendTo("#correct");


	$('.wrong').click(function() {
    	if ((correctHasBeenClicked) || (incorrectHasBeenClicked)){
	
	 			return;
		}else {
			incorrectHasBeenClicked = true;
		}
		
		if (incorrectHasBeenClicked) {

   			console.log("Was incorrect answer clicked: " + incorrectHasBeenClicked);
    		console.log("Wrong Answer!");
    		incorrect++;
    		console.log("No. of incorrect answers is: " + incorrect);
    		$("#msgForUser").empty();		
    		$("<div class='msg'></div>").html("Whomp Whomp! Wrong Answer").appendTo("#msgForUser");

			}
	});
		
    $('.right').click(function() {

    	if ((correctHasBeenClicked) || (incorrectHasBeenClicked)){
	
	 			return;
		}else {
			correctHasBeenClicked = true;
		}
    	if (correctHasBeenClicked) {
    		console.log("Right Answer!");
    		correct++;
    		console.log("No. of correct answers is: " + correct);
    		$("#msgForUser").empty();		
    		$("<div class='msg'></div>").html("You Know The World! Right Answer!").appendTo("#msgForUser");

		}

	});
		
	}, delay+=8000);

});


function reinitializeTimeout(){

    setTimeout(reinitializeGame, 2000);
}

function reinitializeGame(){
	
var questionNumber = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 0;
var incorrectHasBeenClicked;
var correctHasBeenClicked;


var triviaLength = triviaQnA.length;

var delay = 0;
	
var triviaLength = triviaQnA.length;

var delay = 0;
	

$.each(triviaQnA, function(){

	var currentQuestion = this;

	setTimeout(function(){


		var counter = 8;
		var interval = setInterval(function() {
    		counter--;
    				
    		$("#counter").empty();		
    		$("<div class='count'></div>").html("Time Remaining: " + counter +  " " + "Seconds").appendTo("#counter");
    		if (counter == 0){
        		clearInterval(interval);
        		
        		$("#msgForUser").empty();
    			$("#counter").empty();		
    			$("<div class='count'></div>").html("Time Is Up! Next Question").appendTo("#counter");
    			incorrectHasBeenClicked = false;
				correctHasBeenClicked = false;

    		}

    		if ((counter == 0) && (questionNumber === triviaLength)) {
        		clearInterval(interval);
        		$("#msgForUser").empty();
    			$("#counter").empty();		
    			$("<div class='count'></div>").html("Game Is About To Restart").appendTo("#counter");

    			reinitializeTimeout();

    		}

		}, 1000);

		console.log(currentQuestion);

		questionNumber++;
		console.log(questionNumber);
		
		$("#questionNumber").empty();
		var questionNum = toWords(questionNumber);
		console.log(questionNum);
		$("<div class='text'></div>").html("This is question number " + questionNum).appendTo("#questionNumber");


		$("#questions").empty();
		$("<div class='text1'></div>").html(currentQuestion.question).appendTo("#questions");

		$("#options").empty();
		for (var i = 0; i < currentQuestion.options.length; i++){
			console.log(currentQuestion.options[i]);
			$("<button class='col-md-12 button wrong'></button>").html(currentQuestion.options[i]).appendTo("#options");
		}

		$("#correct").empty();
		$("<button class='col-md-12 button right'></button>").html(currentQuestion.rightAnswer).appendTo("#correct");


	$('.wrong').click(function() {
    	if ((correctHasBeenClicked) || (incorrectHasBeenClicked)){
	
	 			return;
		}else {
			incorrectHasBeenClicked = true;
		}
		
		if (incorrectHasBeenClicked) {

   			console.log("Was incorrect answer clicked: " + incorrectHasBeenClicked);
    		console.log("Wrong Answer!");
    		incorrect++;
    		console.log("No. of incorrect answers is: " + incorrect);
    		$("#msgForUser").empty();		
    		$("<div class='msg'></div>").html("Whomp Whomp! Wrong Answer").appendTo("#msgForUser");

			}
	});
		
    $('.right').click(function() {

    	if ((correctHasBeenClicked) || (incorrectHasBeenClicked)){
	
	 			return;
		}else {
			correctHasBeenClicked = true;
		}
    	if (correctHasBeenClicked) {
    		console.log("Right Answer!");
    		correct++;
    		console.log("No. of correct answers is: " + correct);
    		$("#msgForUser").empty();		
    		$("<div class='msg'></div>").html("You Know The World! Right Answer!").appendTo("#msgForUser");

		}

	});
		
	}, delay+=8000);

});


}	



})