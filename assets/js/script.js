// Selecting elements

let score0El = document.getElementById("score-0");
let score1El = document.getElementById("score-1");
let current0El = document.getElementById("current-0");
let current1El = document.getElementById("current-1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn-new");
let btnRoll = document.querySelector(".btn-roll");
let btnHold = document.querySelector(".btn-hold");
let currentScore = 0;
let playerActive = 0;


// When the game lode and if now game button clicked

function newGame(){
    score0El.innerText = 0;
    score1El.innerText = 0;
    current0El.innerText = 0;
    current1El.innerText = 0;
    diceEl.classList.add("hidden");   
}
newGame();

// Add eventListener to roll button
btnRoll.addEventListener("click", function(){
    //Generate random dice roll
    let dice = Math.floor(Math.random() * 6) + 1;
    //Display dice roll
    diceEl.classList.remove("hidden");
    diceEl.src = `assets/images/dice-${dice}.png`;
    //Is it a 1?
    if(dice !== 1){
        //Add dice roll to the current score
        currentScore += dice;
        document.getElementById(`current-${playerActive}`).innerText = currentScore;
    } else {
        //Switch player
        document.getElementById(`current-${playerActive}`).innerText = 0;
        playerActive = playerActive === 0 ? 1 : 0;
        currentScore = 0;
    }
});