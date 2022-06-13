gameGrid = document.querySelector(".gameGrid");
startBtn = document.querySelector("button");
backgroundImg = document.querySelector("section");
message = document.getElementById("message");
computer = document.getElementById("computer");
player = document.getElementById("player");
gameBtn = document.getElementById("gameBtn");

startBtn.addEventListener("click", () => {
	let game = new Game(gameGrid);
	startBtn.disabled = true;
	startBtn.setAttribute("class", "invisible");
	game.createGoalZones(); //CRIA DIVS E APPEND
	game.computerLevel1(); //GOLEIRO RANDOM
	backgroundImg.setAttribute("class", "backgroundImage");

	for (let i = 0; i < game.zonesIdArray.length; i++) {
		//LOOP COLOCAR EVENT NO BOTAO
		let zoneBtn = document.getElementById(i + 1);
		zoneBtn.addEventListener("click", (e) => {
			game.kicks(e);
			changeUniform();
			gameBtns();
		});
	}

	function timeout() {
		gameGrid.setAttribute("class", "invisible");
		setTimeout(() => {
			gameGrid.setAttribute("class", "gameGrid");
		}, 2000);
	}

	function gameBtns() {
		if (game.status === "nextlevel") {
			gameBtn.setAttribute("class", "gameButton slide_right");
			gameGrid.setAttribute("class", "invisible");
		}
	}

	function changeUniform() {
		if (game.roundsCounter % 2 === 0 && game.roundsCounter < 11) {
			player.setAttribute("class", "playerRound1");
			computer.setAttribute("class", "computerRound1");
			timeout();
		} else if (game.roundsCounter % 2 !== 0 && game.roundsCounter < 11) {
			player.setAttribute("class", "playerRound2");
			computer.setAttribute("class", "computerRound2");
			timeout();
			// FASE 2
		} else if (game.roundsCounter % 2 === 0 && game.roundsCounter < 21) {
			player.setAttribute("class", "playerRound1");
			computer.setAttribute("class", "computerRound1");
			backgroundImg.setAttribute("class", "backgroundImageLevel2");
		} else if (game.roundsCounter % 2 !== 0 && game.roundsCounter < 21) {
			player.setAttribute("class", "playerRound2");
			computer.setAttribute("class", "computerRound2");
			backgroundImg.setAttribute("class", "backgroundImageLevel2");
			// FASE 3
		} else if (game.roundsCounter % 2 === 0 && game.roundsCounter < 31) {
			player.setAttribute("class", "playerRound1");
			computer.setAttribute("class", "computerRound1");
			backgroundImg.setAttribute("class", "backgroundImageLevel3");
		} else if (game.roundsCounter % 2 !== 0 && game.roundsCounter < 31) {
			player.setAttribute("class", "playerRound2");
			computer.setAttribute("class", "computerRound2");
			backgroundImg.setAttribute("class", "backgroundImageLevel3");
			// FASE 4
		} else if (game.roundsCounter % 2 === 0 && game.roundsCounter < 41) {
			player.setAttribute("class", "playerRound1");
			computer.setAttribute("class", "computerRound1");
			backgroundImg.setAttribute("class", "backgroundImageLevel4");
		} else if (game.roundsCounter % 2 !== 0 && game.roundsCounter < 41) {
			player.setAttribute("class", "playerRound2");
			computer.setAttribute("class", "computerRound2");
			backgroundImg.setAttribute("class", "backgroundImageLevel4");
		}
	}

	console.log(`Esses sao os pulos do pre-definidos do goleiro ${game.goalKeeperJump}`);
});

// function animations () {

// 	if	(goalKeeperJump[game.roundsCounter - 1] === 1) {

// 	} else if (goalKeeperJump[game.roundsCounter - 1] === 2) {

// 	} else if (goalKeeperJump[game.roundsCounter - 1] === 3) {

// 	} else if (goalKeeperJump[game.roundsCounter - 1] === 4) {

// 	} else if (goalKeeperJump[game.roundsCounter - 1] === 5) {

// 	} else if (goalKeeperJump[game.roundsCounter - 1] === 6) {

// 	}
// 	}
// }
