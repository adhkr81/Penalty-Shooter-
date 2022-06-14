let gameGrid = document.querySelector(".gameGrid");
let startBtn = document.querySelector("button");
let backgroundImg = document.querySelector("section");

let message = document.getElementById("message");
let printComputer = document.getElementById("printComputer");
let printPlayer = document.getElementById("printPlayer");

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
			printScore();
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
			ball.setAttribute("class", "ball_original");
		}, 1100);
	}

	function timeout2() {
		gameGrid.setAttribute("class", "invisible");
		setTimeout(() => {
			gameGrid.setAttribute("class", "gameGrid");
			kicker.setAttribute("class", "red_kick_original");
			goalkeeper.setAttribute("class", "yellow_goalkeeper_original");
			ball.setAttribute("class", "ball_original");
		}, 1100);
	}

	function gameBtns() {
		if (game.status === "nextlevel") {
			gameGrid.setAttribute("class", "invisible");
			gameBtn.setAttribute("class", "gameButton2 slide_right");
			gameBtn.innerText = "YOU WON! PLAY NEXT STAGE";
		}
	}

	function checkStatus() {
		if (game.status === "tie") {
			message.innerText = "IT'S A TIE, PLAY ANOTHER ROUND";
		} else if (game.status === "computerwon") {
			setTimeout(() => {
				gameGrid.setAttribute("class", "invisible");
				gameBtn.setAttribute("class", "gameButton slide_right");
				gameBtn.innerText = "GAME OVER COMPUTER WON";
			}, 1700);
		}
	}

	function printScore() {
		if (game.roundsCounter === 1) {
			printComputer.innerText = "-";
			printPlayer.innerText = game.scorePrintPlayer.join(" ");
		} else {
			printComputer.innerText = game.scorePrintComputer.join(" ");
			printPlayer.innerText = game.scorePrintPlayer.join(" ");
		}
	}

	function goalkeeperAnimations() {
		let jump = game.goalKeeperJump[game.roundsCounter - 1];
		let clickNumber = game.kick;

		if (game.roundsCounter % 2 !== 0) {
			goalkeeper.setAttribute("class", `red_goalkeeper_${jump}`);
			kicker.setAttribute("class", "yellow_kick_1");
			ball.setAttribute("class", `ball_${clickNumber}`);
		}

		if (game.roundsCounter % 2 === 0) {
			goalkeeper.setAttribute("class", `yellow_goalkeeper_${clickNumber}`);
			kicker.setAttribute("class", "red_kick_1");
			ball.setAttribute("class", `ball_${jump}`);
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
