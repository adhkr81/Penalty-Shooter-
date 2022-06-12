class Game {
	constructor(screen) {
		this.screen = screen;

		this.goalKeeperJump = [];
		this.zonesIdArray = [];
		this.roundsCounter = 0;
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

	goalKeeperLevel1() {
		for (let i = 0; i < 5; i++) {
			this.rng = Math.floor(Math.random() * 6 + 1); // RNG
			this.goalKeeperJump.push(this.rng);
		}
	}

	kicks(e) {
		this.kick = Number(e.currentTarget.id);
		this.roundsCounter = this.roundsCounter + 1;
		console.log(
			`Jogador chutou no numero ${this.kick} no round ${this.roundsCounter}`
		);
		this.kickCompare();
	}

	kickCompare(index) {
		if (this.roundsCounter === 1) {
			if (this.kick !== this.goalKeeperJump[0]) {
				console.log("GOOOOOOOOOOOL !");
				// game.message.innerText = "GOOOOOOOOOOOL !"  COMO REFERENCIA ALGO FORA NO SCRIPT.JS???
			} else {
				console.log("DEFEEESAAAA !");
				// game.message.innerText = "DEFEEESAAAA !"
			}
		}

		if (this.roundsCounter === 2) {
			if (this.kick !== this.goalKeeperJump[1]) {
				console.log("GOOOOOOOOOOOL !");
			} else {
				console.log("DEFEEESAAAA !");
			}
		}

		if (this.roundsCounter === 3) {
			if (this.kick !== this.goalKeeperJump[2]) {
				console.log("GOOOOOOOOOOOL !");
			} else {
				console.log("DEFEEESAAAA !");
			}
		}

		if (this.roundsCounter === 4) {
			if (this.kick !== this.goalKeeperJump[3]) {
				console.log("GOOOOOOOOOOOL !");
			} else {
				console.log("DEFEEESAAAA !");
			}
		}

		if (this.roundsCounter === 5) {
			if (this.kick !== this.goalKeeperJump[4]) {
				console.log("GOOOOOOOOOOOL !");
			} else {
				console.log("DEFEEESAAAA !");
			}
		}
	}
}
