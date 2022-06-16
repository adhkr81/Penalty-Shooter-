class Game {
	constructor(screen) {
		this.screen = screen;

		this.goalKeeperJump = [];
		this.zonesIdArray = [];
		this.roundsCounter = 0;
		this.playerScoreArray = []; // para somatoria do reduce
		this.computerScoreArray = []; // para somatoria do reduce

		this.scorePrintPlayer = [];
		this.scorePrintComputer = [];
		this.printPlayer = printPlayer;
		this.printComputer = printComputer;

		this.level = 1;
		this.status = "";
		this.message = "";
	}

	createGoalZones() {
		for (let i = 0; i < 6; i++) {
			this.goalZones = document.createElement("div");
			this.goalZones.setAttribute("class", "grid1");
			this.goalZones.setAttribute("id", i + 1);
			this.goalZones.innerText = i + 1;
			this.screen.appendChild(this.goalZones);
			this.zonesIdArray.push(i + 1); //guarda Id das zonas criadas na array
			// console.log(this.zonesIdArray)
		}
	}

	computerLevel1() {
		for (let i = 0; i < 10; i++) {
			this.rng = Math.floor(Math.random() * 6 + 1); // RNG
			this.goalKeeperJump.push(this.rng);
		}
	}

	kicks(e) {
		this.kick = Number(e.currentTarget.id);
		this.roundsCounter = this.roundsCounter + 1;
		this.parent = e.currentTarget.parentElement;

		this.kickCompare(this.roundsCounter);
	}

	kickCompare(round) {
		if (round === 10) {
			if (this.kick !== this.goalKeeperJump[round - 1]) {
				this.message = `ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou no ${this.kick} e Computador pulou no ${this.goalKeeperJump[this.roundsCounter - 1]}`;
				this.computerScoreArray.push(true);
				this.scorePrintComputer.push("O");

				console.log(`PLAYER SCORE - ${this.playerScoreArray}`);
				console.log(`COMPUTER SCORE - ${this.computerScoreArray}`);
				this.winnerResult();
			} else {
				this.message = `ROUND ${this.roundsCounter} - DEFEEESAAAA !`;
				this.computerScoreArray.push(false);
				this.scorePrintComputer.push("X");

				console.log(`PLAYER SCORE - ${this.playerScoreArray}`);
				console.log(`COMPUTER SCORE - ${this.computerScoreArray}`);
				this.winnerResult();
			}
			//ROUND IMPAR
		} else if (this.kick !== this.goalKeeperJump[round - 1] && round % 2 !== 0) {
			this.message = `ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou no ${this.kick} e Computador pulou no ${this.goalKeeperJump[this.roundsCounter - 1]}`;
			this.playerScoreArray.push(true);
			this.scorePrintPlayer.push("O");
			// this.removePrintBug () COMENTARIO NA LINHA 121
		} else if (this.kick === this.goalKeeperJump[round - 1] && round % 2 !== 0) {
			this.message = `ROUND ${this.roundsCounter} - DEFEEESAAAA !`;
			this.playerScoreArray.push(false);
			this.scorePrintPlayer.push("X");
			// this.removePrintBug () COMENTARIO NA LINHA 121

			//ROUND PAR
		} else if (this.kick !== this.goalKeeperJump[round - 1] && round % 2 === 0) {
			this.message = `ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! COMPUTADOR chutou no ${this.goalKeeperJump[this.roundsCounter - 1]} e Jogador pulou no ${this.kick}`;
			this.computerScoreArray.push(true);
			this.scorePrintComputer.push("O");
		} else if (this.kick === this.goalKeeperJump[round - 1] && round % 2 === 0) {
			this.message = `ROUND ${this.roundsCounter} - DEFEEESAAAA !`;
			this.computerScoreArray.push(false);
			this.scorePrintComputer.push("X");
		}
	}

	winnerResult() {
		this.playerTotal = this.playerScoreArray.reduce((a, b) => a + b, 0);
		this.computerTotal = this.computerScoreArray.reduce((c, d) => c + d, 0);

		if (this.playerTotal > this.computerTotal) {
			this.playerScoreArray = [];
			this.computerScoreArray = [];
			this.scorePrintPlayer = ["-"];
			this.scorePrintComputer = ["-"];
			this.goalKeeperJump = [];
			this.roundsCounter = 1;
			this.computerLevel1();
			console.log("PLAYER WON!!!");
			this.level += 1;
			this.status = "nextlevel";
		} else if (this.playerTotal === this.computerTotal) {
			console.log("EMPATOU");
			this.roundsCounter = 8;
			this.status = "tie";
			this.kickCompare(8);
		} else {
			console.log("COMPUTER WON!!!");
			this.removeAllChild(this.parent);
			this.status = "computerwon";
		}
	}

	// TENTANDO COLOCAR "-" NA ARRAY MUDANCA DE FASE E DEPOIS APAGAR

	// removePrintBug () {
	// 	if (this.scorePrintComputer[0] === "-") {
	// 		this.scorePrintComputer[0].shift()
	// 	}
	// }

	removeAllChild(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
		this.parent.remove();
	}
}
