
// GLOBAL VARIABLES: 
// - WINS
// - LOSES

var playerWins = 0;
var playerLoses = 0;
var targetNumber;
var currentScore;
var button1;
var button2;
var button3;
var button4;


// COMPLETE ROUND FUNCTION () (CONSIDER NAMING INITIALIZE-GAME OR SIMILAR)
// 			THE BELOW WILL RESET THE CRYSTAL VALUES, THE TARGETPOINTS, AND THE CURRENT-TOTAL;
function initialGame (){

	// IN GAME VARIABLES:
	currentScore = 0;
	$("#currentScore").html(currentScore);
	// declares variables for the buttons and assigns them random number between 1-12
	button1 = Math.floor((Math.random()*12) +1);
	button2 = Math.floor((Math.random()*12) +1);
	button3 = Math.floor((Math.random()*12) +1);
	button4 = Math.floor((Math.random()*12) +1);

	console.log("Button 1: ", button1);
	console.log("Button 2: ", button2);
	console.log("Button 3: ", button3);
	console.log("Button 4: ", button4);


	// GENERATE RANDOM NUMBER FOR THE TARGETPOINTS BETWEEN 19-120;
	function createGoal () {
		var min =  19;
		var max = 120;
		targetNumber = Math.floor(Math.random()*(max-min+1) +min);
		console.log("Target Number: ", targetNumber);
		$("#targetNumber").html(targetNumber);
	}

	createGoal()

	// the below code is not pushing to the HTML. 


};
 


$(document).ready(function(){
	
	$("#button1").click(function(){
 	currentScore += button1;

 	console.log("Score is ", currentScore);
 	$("#currentScore").html(currentScore);

 	if (currentScore ===  targetNumber) {
 		playerWins++;
 		$("#playerWin").html(playerWins);
 		initialGame();
 	}

 	else if (currentScore >= targetNumber) {
 		playerLoses++;
 		$("#playerLose").html(playerLoses);
 		initialGame();
 	}
 });

	
	$("#button2").click(function(){
 	currentScore += button2;

 	console.log("Score is ", currentScore);
 	$("#currentScore").html(currentScore);

 	if (currentScore ===  targetNumber) {
 		playerWins++;
 		$("#playerWin").html(playerWins);
 		initialGame();
 	}

 	else if (currentScore >= targetNumber) {
 		playerLoses++;
 		$("#playerLose").html(playerLoses);
 		initialGame();
 	}
});

	
	$("#button3").click(function(){
 	currentScore += button3;

 	console.log("Score is ", currentScore);
 	$("#currentScore").html(currentScore);

 	if (currentScore ===  targetNumber) {
 		playerWins++;
 		$("#playerWin").html(playerWins);
 		initialGame();
 	}

 	else if (currentScore >= targetNumber) {
 		playerLoses++;
 		$("#playerLose").html(playerLoses);
 		initialGame();
 	}
});

	
	$("#button4").click(function(){
 	currentScore += button4;

 	console.log("Score is ", currentScore);
 	$("#currentScore").html(currentScore);

 	if (currentScore ===  targetNumber) {
 		playerWins++;
 		$("#playerWin").html(playerWins);
 		initialGame();
 	}

 	else if (currentScore >= targetNumber) {
 		playerLoses++;
 		$("#playerLose").html(playerLoses);
 		initialGame();
 	}

 });

 initialGame ();

});
 


// PROCESS TO RUN THE ACTUAL GAME: 

// 	CALL THE COMPLETE-ROUND-FUNCTION ()

// 	ONCLICK FOR ALL CRYSTALS -- 
// 		ADDS VALUE OF CRYSTAL CLICKED INTO VALUE OF 'CURRENT-TOTAL'
		
// 		CHECKS IF CURRENT-TOTAL === TARGETPOINTS
// 			ALERT 'YOU WIN';
// 			WINS++;
// 			GOES BACK TO RUN COMPLETE-ROUND-FUNCTION 

// 		CHECKS IF CURRENT-TOTAL > TARGETPOINTS
// 			ALERT 'YOU LOSE'
// 			LOSES++;
// 			GOES BACK TO RUN COMPLETE-ROUND-FUNCTION
		
// 		CHECKS IF CURRENT-TOTAL < TARGETPOINTS
// 			CONTINUES THE LOOP 			

// START GAME FUNCTION HERE STARTGAME()
