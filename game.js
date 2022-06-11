class Game {
	constructor(screen) {
		this.screen = screen;

		this.goalKeeperJump = [];
		this.kickArray = [];
		this.zonesIdArray = [];
		this.roundsArray = [];
	}

	createGoalZones() {
		for (let i = 0; i < 6; i++) {
			this.goalZones = document.createElement("div");
			this.goalZones.setAttribute("class", `grid${i + 1}`);
			this.goalZones.setAttribute("id", `zone${i + 1}`);
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

	kickCompare(index) {
		if (this.kickArray[index] !== this.goalKeeperJump[index]) {
			// console.log(this.kickArray[index])
			// console.log(typeof this.kickArray[index])
			// console.log(this.goalKeeperJump[index])
			// console.log(typeof this.goalKeeperJump[index])

			console.log("GOL!!!!!");
		} else {
			console.log("DEFESAAAAAAAAAA");
		}
	}
}
