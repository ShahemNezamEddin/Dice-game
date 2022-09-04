// Selecting elements
let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");
let score0El = document.getElementById("score-0");
let score1El = document.getElementById("score-1");
let current0El = document.getElementById("current-0");
let current1El = document.getElementById("current-1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn-new");
let btnRoll = document.querySelector(".btn-roll");
let btnHold = document.querySelector(".btn-hold");
let currentScore;
let playerActive;
let score;
let playing;
let instruction = document.querySelector(".instruction");
let btnOk = document.querySelector(".btn-ok");
let btnInstruction = document.querySelector(".btn-instruction");



// When the game lode and if now game button clicked

function newGame() {
    score0El.innerText = 0;
    score1El.innerText = 0;
    current0El.innerText = 0;
    current1El.innerText = 0;

    currentScore = 0;
    playerActive = 0;
    score = [0, 0];
    playing = true;

    diceEl.classList.add("hidden");
    player0.classList.add("player-active");
    player1.classList.remove("player-active");
    player0.classList.remove("winner");
    player1.classList.remove("winner");

    document.querySelector(".name-0").innerText = "player 1";
    document.querySelector(".name-1").innerText = "player 2";


}


function switchPlayer() {
    document.getElementById(`current-${playerActive}`).innerText = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle("player-active");
    player1.classList.toggle("player-active");
};


// Add eventListener to roll button
btnRoll.addEventListener("click", function () {
    if (playing) {
        //Generate random dice roll
        let dice = Math.floor(Math.random() * 6) + 1;
        //Display dice roll
        diceEl.classList.remove("hidden");
        diceEl.src = `assets/images/dice-${dice}.png`;
        //Is it a 1?
        if (dice !== 1) {
            //Add dice roll to the current score
            currentScore += dice;
            document.getElementById(`current-${playerActive}`).innerText = currentScore;
        } else {
            //Switch player
            switchPlayer();
        }
    }
});

// Add eventListener to hold button

btnHold.addEventListener("click", function () {
    if (playing) {
        // Add current score to total score
        score[playerActive] += currentScore;
        document.getElementById(`score-${playerActive}`).innerText = score[playerActive];
        // Is the total score>=100?
        if (score[playerActive] >= 20) {
            //Active player wins!
            document.querySelector(`.player-${playerActive}`).classList.add("winner");
            document.querySelector(`.player-${playerActive}`).classList.remove("player-active");
            document.querySelector(`.name-${playerActive}`).innerText = "Winner"
            playing = false;
            diceEl.classList.add("hidden");
        } else {
            //Switch player
            switchPlayer();
        }
    }
});

// Add eventListener to New game button

btnNew.addEventListener("click", function () {
    newGame();
});

// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    newGame();
});


// Add eventListener to ok button

btnOk.addEventListener("click", function () {
    instruction.classList.add("hidden");
});

// Add eventListener to ok button

btnInstruction.addEventListener("click", function () {
    instruction.classList.remove("hidden");
});