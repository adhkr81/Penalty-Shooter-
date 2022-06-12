gameGrid = document.querySelector(".gameGrid");
startBtn = document.querySelector("button");
backgroundImg = document.querySelector("section");
message = document.getElementById("message");
computer = document.getElementById("computer")
player = document.getElementById("player")

// console.log(startBtn);
// console.log(gameGrid);

startBtn.addEventListener("click", () => {
	let game = new Game(gameGrid);
	startBtn.disabled = true;
	game.createGoalZones(); //CRIA DIVS E APPEND
	game.computerLevel1(); //GOLEIRO RANDOM
	backgroundImg.setAttribute("class", "backgroundImage");


	for (let i = 0; i < game.zonesIdArray.length; i++) {
		//LOOP COLOCAR EVENT NO BOTAO
		let zoneBtn = document.getElementById(i + 1);
		zoneBtn.addEventListener("click", (e) => {
			game.kicks(e);
			if (game.roundsCounter % 2 === 0) {
				player.setAttribute("class", "playerRound1")
				computer.setAttribute("class", "computerRound1")
			} else {
				player.setAttribute("class", "playerRound2")
				computer.setAttribute("class", "computerRound2")
			}
		
		});
	}

	console.log(
		`Esses sao os pulos do pre-definidos do goleiro ${game.goalKeeperJump}`
	);





});
