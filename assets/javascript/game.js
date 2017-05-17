
// GLOBAL VARIABLES: 
// - WINS
// - LOSES
// - CRYSTAL VALUES ARRAY

var playerWins = 0;
var playerLoses = 0;




// COMPLETE ROUND FUNCTION () (CONSIDER NAMING INITIALIZE-GAME OR SIMILAR)
// 			THE BELOW WILL RESET THE CRYSTAL VALUES, THE TARGETPOINTS, AND THE CURRENT-TOTAL;
function initialGame (){

	// IN GAME VARIABLES:
	var targetNumber;
	var currentScore;
	var button1 = Math.floor((Math.random()*12) +1);
	var button2 = Math.floor((Math.random()*12) +1);
	var button3 = Math.floor((Math.random()*12) +1);
	var button4 = Math.floor((Math.random()*12) +1);

	console.log("Button 1: ", button1)

	console.log("Button 2: ", button2)

	console.log("Button 3: ", button3)

	console.log("Button 4: ", button4)

	// ARRAY OF CRYSTAL-VARIABLES (BUTTON#) [CRYSTAL 0, CRYSTAL 1, CRYSTAL 2, CRYSTAL 3]
	// VAR TARGETPOINTS = 0
	// VAR CURRENT-TOTAL OF POINTS = 0

	// GENERATE RANDOM NUMBER FOR THE TARGETPOINTS BETWEEN 19-120;
	function createGoal () {
		var min =  19;
		var max = 120;
		targetNumber = Math.floor(Math.random()*(max-min+1) +min);
		return targetNumber;
	}
	createGoal()
			console.log("Target Number: ", targetNumber);


	// 		use jQuery #each method to access each crystal, then randomly assign a numerical value!




}
 
 $('button1').on("click", function() {
 	currentScore += button1;
 	document.querySelector("#currentScore").innerHTML = currentScore;
 	console.log("Score is ", currentScore);

 	if (currentScore ===  targetNumber) {
 		playerWins++;
 		document.querySelector("#playerWin").innerHTML = playerWins;
 		initialGame();
 	};

 	if (currentScore >= targetNumber) {
 		playerLoses++;
 		document.querySelector("#playerLose").innerHTML = playerLoses;
 		initialGame();
 	};
 });

 initialGame ();


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
