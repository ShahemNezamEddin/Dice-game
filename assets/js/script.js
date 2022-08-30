// Selecting elements

let score0El = document.getElementById("score-0");
let score1El = document.getElementById("score-1");
let current0El = document.getElementById("current-0");
let current1El = document.getElementById("current-1");
let diceEl = document.querySelector(".dice");
console.log(diceEl);
//*When the game lode and if now game button clicked

function newGame(){
    score0El.innerText = 0;
    score1El.innerText = 0;
    current0El.innerText = 0;
    current1El.innerText = 0;
    diceEl.classList.add("hidden");   
}
newGame();