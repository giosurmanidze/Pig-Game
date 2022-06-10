const diceImg = document.querySelector(".dice--img");
const  btnRoll = document.querySelector(".btn-roll");
const player0Score = document.querySelector(".player_0_score");
const player1Score = document.querySelector(".player_1_score");
const currentScore0 = document.querySelector(".current-score-0");
const currentScore1 = document.querySelector(".current-score-1");
const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");
const holdBtn = document.querySelector(".holdBtn");
const NewGameBtn = document.querySelector(".NewGameBtn");

player0Score.textContent =  0;
player1Score.textContent = 0;
diceImg.classList.add("hidden");


let scores,currentSocre,activePlayer,playing;

const init = () => {
     scores = [0,0];
     currentSocre = 0;
     activePlayer = 0;
     playing = true;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    player0Score.textContent = 0;
    player1Score.textContent = 0;
    playerOne.classList.remove("winnerPlayer")
    playerTwo.classList.remove("winnerPlayer")
    playerOne.classList.add("player-active")
    playerTwo.classList.remove("player-active")
}

function switchPlayer() {
    currentSocre = 0;
    document.querySelector(`.current-score-${activePlayer}`).textContent = currentSocre;
    activePlayer = activePlayer == 0 ? 1 : 0;
    playerOne.classList.toggle("player-active");
    playerTwo.classList.toggle("player-active");
}
init();


btnRoll.addEventListener("click",() => {
    if(playing) {

    const randomDice = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `/images/dice-${randomDice}.png`;
     diceImg.classList.remove("hidden")

    if(randomDice !== 1 ) {
        currentSocre += randomDice;
        document.querySelector(`.current-score-${activePlayer}`).textContent = currentSocre;
    }else {
        switchPlayer();
    }
}
  
})

holdBtn.addEventListener("click",() => {
    if(playing) {

    
     scores[activePlayer] += currentSocre;
     document.querySelector(`.player_${activePlayer}_score`).textContent = scores[activePlayer];
     if(scores[activePlayer] >= 100) {
         playing = false;
         document.querySelector(`.player--${activePlayer}`).classList.add("winnerPlayer")
         document.querySelector(`.player--${activePlayer}`).classList.remove("player-active")
     }else {
        if(currentSocre !== 0) {
            switchPlayer();
        }
     }
    }
})

NewGameBtn.addEventListener("click",() => {
   init();
})