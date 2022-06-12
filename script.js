gameGrid = document.querySelector(".gameGrid");
startBtn = document.querySelector("button");
backgroundImg = document.querySelector("section");
message = document.getElementById("message");

// console.log(startBtn);
// console.log(gameGrid);

startBtn.addEventListener("click", () => {
	let game = new Game(gameGrid);
	startBtn.disabled = true;
	game.createGoalZones(); //CRIA DIVS E APPEND
	game.goalKeeperLevel1(); //GOLEIRO RANDOM
	backgroundImg.setAttribute("class", "backgroundImage");


	for (let i = 0; i < game.zonesIdArray.length; i++) {
		//LOOP COLOCAR EVENT NO BOTAO
		let zoneBtn = document.getElementById(i + 1);
		zoneBtn.addEventListener("click", (e) => {
			game.kicks(e);
		});
	}

	console.log(
		`Esses sao os pulos do pre-definidos do goleiro ${game.goalKeeperJump}`
	);
});
