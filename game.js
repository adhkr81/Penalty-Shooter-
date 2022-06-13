class Game {
	constructor(screen) {
		this.screen = screen;

		this.goalKeeperJump = [];
		this.zonesIdArray = [];
		this.roundsCounter = 0;
		this.playerScoreArray = [];
		this.computerScoreArray = [];
		this.level = 1;
		this.status = ""
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
		this.roundsCounter = this.roundsCounter + 1
		this.parent = e.currentTarget.parentElement;

		this.kickCompare(this.roundsCounter);
	}

	kickCompare(round) {
		if (round === 10) {
			if (this.kick !== this.goalKeeperJump[round - 1]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${this.goalKeeperJump[this.roundsCounter - 1]}`);
				this.computerScoreArray.push(true);

				console.log(`PLAYER SCORE - ${this.playerScoreArray}`);
				console.log(`COMPUTER SCORE - ${this.computerScoreArray}`);
				this.winnerResult();
			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.computerScoreArray.push(false);
				console.log(`PLAYER SCORE - ${this.playerScoreArray}`);
				console.log(`COMPUTER SCORE - ${this.computerScoreArray}`);
				this.winnerResult();
			}
			//ROUND IMPAR
		} else if (this.kick !== this.goalKeeperJump[round - 1] && round % 2 !== 0) {
			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${this.goalKeeperJump[this.roundsCounter - 1]}`);
			this.playerScoreArray.push(true);
		} else if (this.kick === this.goalKeeperJump[round - 1] && round % 2 !== 0) {
			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
			this.playerScoreArray.push(false);
			//ROUND PAR
		} else if (this.kick !== this.goalKeeperJump[round - 1] && round % 2 === 0) {
			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! COMPUTADOR chutou em ${this.goalKeeperJump[this.roundsCounter - 1]} e Jogador pulou em ${this.kick}`);
			this.computerScoreArray.push(true);
		} else if (this.kick === this.goalKeeperJump[round - 1] && round % 2 === 0) {
			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
			this.computerScoreArray.push(false);
		}
	}

	winnerResult() {
		this.playerTotal = this.playerScoreArray.reduce((a, b) => a + b, 0);
		this.computerTotal = this.computerScoreArray.reduce((c, d) => c + d, 0);

		if (this.playerTotal > this.computerTotal) {
			this.playerScoreArray = [];
			this.computerScoreArray = [];
			console.log("PLAYER WON!!!");
			this.level = 2;
			this.status = "nextlevel"
			this.removeAllChild(this.parent);
		} else if (this.playerTotal === this.computerTotal) {
			this.playerScoreArray = [];
			this.computerScoreArray = [];
			console.log("EMPATOU");
			this.roundsCounter = 9;
			this.status = "tie";
		} else {
			console.log("COMPUTER WON!!!");
			this.removeAllChild(this.parent);
			this.status = "computerwon";
		}
	}

	removeAllChild(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}
}



// ************************************ TENTATIVA REFATORAR KICKCOMPARE ***************************

// kickCompareOLDVERSION() {
// 	if (this.roundsCounter === 1) {
// 		if (this.kick !== this.goalKeeperJump[0]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${this.goalKeeperJump[0]}`);
// 			this.playerScoreArray.push(true)
// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.playerScoreArray.push(false)
// 		}
// 	}

// 	if (this.roundsCounter === 2) {
// 		if (this.kick !== this.goalKeeperJump[1]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Computador chutou em ${this.kick} e Playerpulou em ${this.goalKeeperJump[1]}`);
// 			this.computerScoreArray.push(true)
// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.computerScoreArray.push(false)
// 		}
// 	}

// 	if (this.roundsCounter === 3) {
// 		if (this.kick !== this.goalKeeperJump[2]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${this.goalKeeperJump[2]}`);
// 			this.playerScoreArray.push(true)
// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.playerScoreArray.push(false)
// 		}
// 	}

// 	if (this.roundsCounter === 4) {
// 		if (this.kick !== this.goalKeeperJump[3]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Computador chutou em ${this.kick} e Playerpulou em ${this.goalKeeperJump[3]}`);
// 			this.computerScoreArray.push(true)
// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.computerScoreArray.push(false)
// 		}
// 	}

// 	if (this.roundsCounter === 5) {
// 		if (this.kick !== this.goalKeeperJump[4]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${this.goalKeeperJump[4]}`);
// 			this.playerScoreArray.push(true)

// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.playerScoreArray.push(false)

// 		}
// 	}
// 	if (this.roundsCounter === 6) {
// 		if (this.kick !== this.goalKeeperJump[5]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${this.goalKeeperJump[5]}`);
// 			this.computerScoreArray.push(true)
// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.computerScoreArray.push(false)
// 		}
// 	}

// 	if (this.roundsCounter === 7) {
// 		if (this.kick !== this.goalKeeperJump[6]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Computador chutou em ${this.kick} e Playerpulou em ${this.goalKeeperJump[6]}`);
// 			this.playerScoreArray.push(true)
// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.playerScoreArray.push(false)
// 		}
// 	}

// 	if (this.roundsCounter === 8) {
// 		if (this.kick !== this.goalKeeperJump[7]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${this.goalKeeperJump[7]}`);
// 			this.computerScoreArray.push(true)
// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.computerScoreArray.push(false)
// 		}
// 	}

// 	if (this.roundsCounter === 9) {
// 		if (this.kick !== this.goalKeeperJump[8]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Computador chutou em ${this.kick} e Playerpulou em ${this.goalKeeperJump[8]}`);
// 			this.playerScoreArray.push(true)
// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.playerScoreArray.push(false)
// 		}
// 	}

// 	if (this.roundsCounter === 10) {
// 		if (this.kick !== this.goalKeeperJump[9]) {
// 			console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${this.goalKeeperJump[9]}`);
// 			this.computerScoreArray.push(true)

// 			console.log(`PLAYER SCORE - ${this.playerScoreArray}`)
// 			console.log(`COMPUTER SCORE - ${this.computerScoreArray}`)
// 			this.winnerResult()

// 		} else {
// 			console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
// 			this.computerScoreArray.push(false)

// 			console.log(`PLAYER SCORE - ${this.playerScoreArray}`)
// 			console.log(`COMPUTER SCORE - ${this.computerScoreArray}`)
// 			this.winnerResult()
// 		}
// 	}

// }
