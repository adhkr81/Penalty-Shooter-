let gameGrid = document.querySelector(".gameGrid");
let startBtn = document.querySelector("button");
let backgroundImg = document.querySelector("section");

let message = document.getElementById("message");
let printPlayer = document.getElementById("printPlayer");

let printComputer = document.getElementById("printComputer");
let kicker = document.getElementById("kicker");
let goalkeeper = document.getElementById("goalkeeper");
let gameBtn = document.getElementById("gameBtn");

// -------------------------> usar depois .reload()

// MELHOR INICIAR AQUI ESSES 2 METODOS PARA ROLAR A TRANSICAO DE FASE SEM TER QUE APAGAR DIVS
    let game = new Game(gameGrid);    
    game.createGoalZones(); //CRIA DIVS E APPEND




startBtn.addEventListener("click", () => {

	startBtn.disabled = true;
	startBtn.setAttribute("class", "invisible");
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
            printScore();
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

// ELMINEI A FUNCAO CHECKBTN, E COMBINEI AQUI EM CHECKSTATUS, 
// AS DIVS ESTAO SAINDO DO LUCAR POR CAUSA DO "-" DO PLACAR DO PRINTCOMPUTER, QUE MUDA E FICA VAZIO POR 1 TURNO
	function checkStatus() {
		if (game.status === "tie") {
			message.innerText = "IT'S A TIE, PLAY ANOTHER ROUND";

		} else if (game.status === "computerwon") {
			setTimeout(() => {
				gameGrid.setAttribute("class", "invisible");
				gameBtn.setAttribute("class", "gameButton slide_right");
				gameBtn.innerText = "GAME OVER COMPUTER WON";
			}, 1700);

		} else if(game.status === "nextlevel") {

            backgroundImg.setAttribute("class", `backgroundImage${game.level}`)
            console.log(`Esses sao os pulos do pre-definidos do goleiro ${game.goalKeeperJump} do level ${game.level}`);
            printScore();
		}
	}

	function printScore() {
		if (game.roundsCounter === 1) {
			printComputer.innerText = "-";
			printPlayer.innerText = game.scorePrintPlayer.join(" ");

		} else if (game.roundsCounter > 1) {
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
		if (game.roundsCounter % 2 === 0 && game.roundsCounter) {
			message.innerText = game.message;
			timeout1();
		} else if (game.roundsCounter % 2 !== 0 && game.roundsCounter) {
			message.innerText = game.message;
			timeout2();
		}
	}

	console.log(`Esses sao os pulos do pre-definidos do goleiro ${game.goalKeeperJump}`);
});
