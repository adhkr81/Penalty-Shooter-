class Game {
	constructor(screen) {
		this.screen = screen;

		this.goalKeeperJump = [];
		this.zonesIdArray = [];
		this.roundsCounter = 0;
		this.playerScoreArray = [];
		this.computerScoreArray = [];
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
 
		this.kickCompare();
	}


	kickCompare(index) {
		if (this.roundsCounter === 1) {
			if (this.kick !== this.goalKeeperJump[0]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${0}`);
				this.playerScoreArray.push(true)
			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.playerScoreArray.push(false)
			}
		}

		if (this.roundsCounter === 2) {
			if (this.kick !== this.goalKeeperJump[1]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Computador chutou em ${this.kick} e Playerpulou em ${1}`);
				this.computerScoreArray.push(true)
			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.computerScoreArray.push(false)
			}
		}

		if (this.roundsCounter === 3) {
			if (this.kick !== this.goalKeeperJump[2]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${2}`);
				this.playerScoreArray.push(true)
			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.playerScoreArray.push(false)
			}
		}

		if (this.roundsCounter === 4) {
			if (this.kick !== this.goalKeeperJump[3]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Computador chutou em ${this.kick} e Playerpulou em ${3}`);
				this.computerScoreArray.push(true)
			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.computerScoreArray.push(false)
			}
		}

		if (this.roundsCounter === 5) {
			if (this.kick !== this.goalKeeperJump[4]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${4}`);
				this.playerScoreArray.push(true)


			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.playerScoreArray.push(false)

			}
		}
		if (this.roundsCounter === 6) {
			if (this.kick !== this.goalKeeperJump[5]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${5}`);
				this.computerScoreArray.push(true)
			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.computerScoreArray.push(false)
			}
		}

		if (this.roundsCounter === 7) {
			if (this.kick !== this.goalKeeperJump[6]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Computador chutou em ${this.kick} e Playerpulou em ${6}`);
				this.playerScoreArray.push(true)
			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.playerScoreArray.push(false)
			}
		}

		if (this.roundsCounter === 8) {
			if (this.kick !== this.goalKeeperJump[7]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${7}`);
				this.computerScoreArray.push(true)
			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.computerScoreArray.push(false)
			}
		}

		if (this.roundsCounter === 9) {
			if (this.kick !== this.goalKeeperJump[8]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Computador chutou em ${this.kick} e Playerpulou em ${8}`);
				this.playerScoreArray.push(true)
			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.playerScoreArray.push(false)
			}
		}

		if (this.roundsCounter === 10) {
			if (this.kick !== this.goalKeeperJump[9]) {
				console.log(`ROUND ${this.roundsCounter} - GOOOOOOOOOOOL ! Jogador chutou em ${this.kick} e Computador pulou em ${9}`);
				this.computerScoreArray.push(true)

				console.log(this.playerScoreArray)
				console.log(this.computerScoreArray)


			} else {
				console.log(`ROUND ${this.roundsCounter} - DEFEEESAAAA !`);
				this.computerScoreArray.push(false)

				console.log(`PLAYER SCORE${this.playerScoreArray}`)
				console.log(`COMPUTER SCORE${this.computerScoreArray}`)
			}
		}
	}
}
