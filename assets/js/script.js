// Selecting elements
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const score0El = document.getElementById("score-0");
const score1El = document.getElementById("score-1");
const current0El = document.getElementById("current-0");
const current1El = document.getElementById("current-1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
const instruction = document.querySelector(".instruction");
const btnOk = document.querySelector(".btn-ok");
const btnInstruction = document.querySelector(".btn-instruction");

let currentScore, playerActive, score, playing, soundActive = true;

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

//Switch player
function switchPlayer() {
    document.getElementById(`current-${playerActive}`).innerText = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle("player-active");
    player1.classList.toggle("player-active");
};

// Dice-audio
function diceAudio(soundActive) {
    if (soundActive) {
        document.getElementById("dice-audio").play();
    }
};

// Click-audio
function clickAudio(soundActive) {
    if (soundActive) {
        document.getElementById("click-audio").play();
    }
};

// Winner-audio
function winnerAudio(soundActive) {
    if (soundActive) {
        document.getElementById("winner-audio").play();
    }
};




// Add eventListener to roll button
btnRoll.addEventListener("click", function () {
    if (playing) {
        diceAudio(soundActive);
        //Generate random dice roll
        let dice = Math.floor(Math.random() * 6) + 1;
        //Display dice roll
        diceEl.classList.remove("hidden");
        diceEl.src = `assets/images/dice-${dice}.png`;
        diceEl.alt = `Playing dice ${dice}`;
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
        // Add sound 
        clickAudio(soundActive);
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
            winnerAudio(soundActive);
        } else {
            //Switch player
            switchPlayer();
        }
    }
});

// Add eventListener to New game button

btnNew.addEventListener("click", function () {
    // Add sound 
    clickAudio(soundActive);
    newGame();
});

// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function () {
    newGame();
});


// Add eventListener to ok button

btnOk.addEventListener("click", function () {
    // Add sound 
    clickAudio(soundActive);
    instruction.classList.add("hidden");
});

// Add eventListener to ok button

btnInstruction.addEventListener("click", function () {
    // Add sound 
    clickAudio(soundActive);
    instruction.classList.remove("hidden");
});

// Add eventListener to sound button
document.querySelector(".btn-sound").addEventListener("click", function () {
    soundActive = true;
    clickAudio(soundActive);
});

// Add eventListener to mute button
document.querySelector(".btn-mute").addEventListener("click", function () {
    soundActive = false;
    clickAudio(soundActive);
});