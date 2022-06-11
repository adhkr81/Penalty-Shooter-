gameGrid = document.querySelector(".gameGrid");
startBtn = document.querySelector("button");

console.log(startBtn);
console.log(gameGrid);


startBtn.addEventListener("click", () => {

    let game = new Game(gameGrid);
    startBtn.disabled = true
    game.createGoalZones();  //CRIA DIVS E APPEND
    game.goalKeeperLevel1(); //GOLEIRO RANDOM
    


    for (let i = 0; i < game.zonesIdArray.length; i++) { //LOOP COLOCAR EVENT NO BOTAO
        let zoneBtn = document.getElementById(`zone${i + 1}`)
        zoneBtn.addEventListener("click", () => {
            game.kickArray.push(i + 1)  //SALVA CHUTES EM ARRAY
            console.log(game.kickArray.push(i + 1))
            game.kickCompare(i);  //COMO COMPARAR O CHUTE E GOLEIRO???
        })
    }





    console.log(`ESSES SAO OS PULOS DO GOLEIRO : ${game.goalKeeperJump}`)
})




