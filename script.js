let gameGrid = document.querySelector(".gameGrid");
let startBtn = document.querySelector("button");
let backgroundImg = document.querySelector("section");

let message = document.getElementById("message");

let kicker = document.getElementById("kicker");
let goalkeeper = document.getElementById("goalkeeper");
let gameBtn = document.getElementById("gameBtn");

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
			goalkeeperAnimations();
			changeUniform();
			checkStatus();
			gameBtns();
		});
	}

	function timeout1() {
		gameGrid.setAttribute("class", "invisible");
		setTimeout(() => {
			gameGrid.setAttribute("class", "gameGrid");
			kicker.setAttribute("class", "yellow_kick_original");
			goalkeeper.setAttribute("class", "red_goalkeeper_original");
		}, 1000);
	}

	function timeout2() {
		gameGrid.setAttribute("class", "invisible");
		setTimeout(() => {
			gameGrid.setAttribute("class", "gameGrid");
			kicker.setAttribute("class", "red_kick_original");
			goalkeeper.setAttribute("class", "yellow_goalkeeper_original");
		}, 1000);
	}

	function gameBtns() {
		if (game.status === "nextlevel") {
			gameGrid.setAttribute("class", "invisible");
			gameBtn.setAttribute("class", "gameButton slide_right");
			message.innerText = "O JOGADOR VENCEU A PARTIDA, AVANCE PARA A PROXIMA FASE";
		}
	}

	function checkStatus() {
		if (game.status === "tie") {
			message.innerText = "EMPATE, jogue mais uma rodada!";
		} else if (game.status === "computerwon") {
			setTimeout(() => {
				message.innerText = "GAME OVER COMPUTADOR VENCEU";
				gameGrid.setAttribute("class", "invisible");
			}, 1000);
		}
	}

	function goalkeeperAnimations() {
		let jump = game.goalKeeperJump[game.roundsCounter - 1];
		let clickNumber = game.kick;

		if (game.roundsCounter % 2 !== 0) {
			goalkeeper.setAttribute("class", `red_goalkeeper_${jump}`);
		}

		if (game.roundsCounter % 2 === 0) {
			goalkeeper.setAttribute("class", `yellow_goalkeeper_${clickNumber}`);
		}
	}

	function changeUniform() {
		if (game.roundsCounter % 2 === 0 && game.roundsCounter < 11) {
			message.innerText = game.message;
			timeout1();
		} else if (game.roundsCounter % 2 !== 0 && game.roundsCounter < 11) {
			message.innerText = game.message;
			timeout2();
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

// FASE 2
// } else if (game.roundsCounter % 2 === 0 && game.roundsCounter < 21) {
// 	player.setAttribute("class", "playerRound1");
// 	computer.setAttribute("class", "computerRound1");
// 	backgroundImg.setAttribute("class", "backgroundImageLevel2");
// } else if (game.roundsCounter % 2 !== 0 && game.roundsCounter < 21) {
// 	player.setAttribute("class", "playerRound2");
// 	computer.setAttribute("class", "computerRound2");
// 	backgroundImg.setAttribute("class", "backgroundImageLevel2");
// 	// FASE 3
// } else if (game.roundsCounter % 2 === 0 && game.roundsCounter < 31) {
// 	player.setAttribute("class", "playerRound1");
// 	computer.setAttribute("class", "computerRound1");
// 	backgroundImg.setAttribute("class", "backgroundImageLevel3");
// } else if (game.roundsCounter % 2 !== 0 && game.roundsCounter < 31) {
// 	player.setAttribute("class", "playerRound2");
// 	computer.setAttribute("class", "computerRound2");
// 	backgroundImg.setAttribute("class", "backgroundImageLevel3");
// 	// FASE 4
// } else if (game.roundsCounter % 2 === 0 && game.roundsCounter < 41) {
// 	player.setAttribute("class", "playerRound1");
// 	computer.setAttribute("class", "computerRound1");
// 	backgroundImg.setAttribute("class", "backgroundImageLevel4");
// } else if (game.roundsCounter % 2 !== 0 && game.roundsCounter < 41) {
// 	player.setAttribute("class", "playerRound2");
// 	computer.setAttribute("class", "computerRound2");
// 	backgroundImg.setAttribute("class", "backgroundImageLevel4");
