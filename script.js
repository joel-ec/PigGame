'use strict';

const score0El =  document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, scores,playing, activePlayer;


const init = function(){
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0,0];

    score0El.textContent = 0;
    score1El.textContent  = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

};
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        //activePlayer === 0? player0El.classList.add('player--active') : player1El.classList.add('player--active') ;
        // if(activePlayer === 0){
        //     player0El.classList.add('player--active');
        //     player1El.classList.remove('player--active');
        // }
        // else{
        //     player0El.classList.remove('player--active');
        //     player1El.classList.add('player--active');
        // }
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){
    //generate a randome dice roll
    if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for rolled 1

    if(dice !== 1){
        //add dice to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }else{
        //switch the player
        switchPlayer();

    }
}

});

btnHold.addEventListener('click',function(){
    //add current score to active player's score
    if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

    //check if player's score is >= 100
    if (scores[activePlayer] >= 100){
        //finish the game
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }

    else{
    //switch to the next player
    switchPlayer();
    }
}
});

//my own implementation of button New
/*
btnNew.addEventListener('click',function(){
    playing = true;
    currentScore = 0;
    scores[0] = 0;
    scores[1] =  0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner'); 
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0; 
    if(!player0El.classList.contains('player--active')){
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');

    }
    activePlayer = 0;


});
*/

btnNew.addEventListener('click',init)

const greet = greeting => {
    return (name) =>{
        console.log(`${greeting} ${name}`)
    }
    }




