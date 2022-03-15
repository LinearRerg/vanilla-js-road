'use strict';

// selecting elements
const player1EL = document.querySelector('.player--0')
const player2EL = document.querySelector('.player--1')

const score1EL = document.querySelector('#score--0');
const score2EL = document.querySelector('#score--1');
const current1EL = document.querySelector('#current--0')
const current2EL = document.querySelector('#current--1')

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// function 
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
activePlayer = activePlayer === 0 ? 1: 0;
player1EL.classList.toggle('player--active')
player2EL.classList.toggle('player--active')


}



// starting condiitons
score1EL.textContent = Number(0);
score2EL.textContent = Number(0);
diceEL.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true
// rolling dice functionality
btnRoll.addEventListener('click', function(){
if(playing) {

    // 1. genearting a random dice rol
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceEL.classList.remove('hidden')
    diceEL.src = `dice-${dice}.png`
    // 3. check for rolled 1: if true, switch to next player
if(dice !== 1) { 
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore


} else {
// switch to next player

document.getElementById(`score--${activePlayer}`).textContent = 0
scores[activePlayer] = 0 // CHANGE TO 0
console.log(`score--${activePlayer}`)
switchPlayer()
}
}
})


btnHold.addEventListener('click', function(){
    console.log('hold button')
if (playing){
    // 1. add current score to active player's score
// scores[1] = scores[1] + currentScore
    scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. check if player's score is >= 100
    // finish the game
if(scores[activePlayer] >= 20)  {
playing = false;

document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

} else { 

    switchPlayer();

}

    // switch to the next game
}
})




btnNew.addEventListener('click', function(){
    playing = true
    score1EL.textContent = 0
    score2EL.textContent = 0 
    current1EL.textContent = 0
    current2EL.textContent = 0
    currentScore = 0
    player2EL.classList.remove('player--active')
    player1EL.classList.add('player--active')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    diceEL.classList.add('hidden')
})

