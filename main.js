const inputElm = document.querySelector('#input');
const formElm = document.querySelector('form');
const winScoreElm = document.querySelector('.winScore');
const p1BtnElm = document.querySelector('.p1');
const p1ScoreElm = document.querySelector('.p1Score');
const p2BtnElm = document.querySelector('.p2');
const p2ScoreElm = document.querySelector('.p2Score');
const restBtnElm = document.querySelector('.reset');

let winScore = 20;
let p1Score = 0;
let p2Score = 0;
let turn = 'player1';
let turn1 = 'player2';

winScoreElm.textContent = winScore;
p1ScoreElm.textContent = p1Score;
p2ScoreElm.textContent = p2Score;


/*function generateRandomNum(max) {
    return (Math.ceil(Math.random() * max));
}*/

formElm.addEventListener('submit', e => {
    e.preventDefault();
    const inputVal = +inputElm.value;
    //validation
    if (inputVal === '' || inputVal < 1) {
        if (!document.querySelector('.invalid-input')) {
            formElm.insertAdjacentHTML('beforebegin',
                '<p class="invalid-input">Please input valid number<p/>');
        }

    } else {
        if (document.querySelector('.invalid-input')) {
            document.querySelector('.invalid-input').remove();
        }

        winScore = +inputElm.value; //'+'convert into number
        winScoreElm.textContent = winScore;
        inputElm.value = '';

        initialPlayState();
    }

})


p1BtnElm.addEventListener('click', e => {
    if ('player1') {
        p1Score++;
        p1ScoreElm.textContent = p1Score;
        //turn = 'player2';
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.removeAttribute('disabled');

        checkWinner();
    }

})


p2BtnElm.addEventListener('click', e => {
    if ('player2') {
        p2Score++;
        p2ScoreElm.textContent = p2Score;
        // turn = 'player1';
        p2BtnElm.setAttribute('disabled', 'disabled');
        p1BtnElm.removeAttribute('disabled');
        checkWinner();
    }

})


function checkWinner() {
    const isP1Winner = winScore === p1Score;
    const IsP2Winner = winScore === p2Score;
    console.log(isP1Winner, IsP2Winner);
    if (isP1Winner || IsP2Winner) {
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
    }

    displayWinner(isP1Winner, IsP2Winner);

}


function displayWinner(p1WinnerState, p2WinnerState) {
    if (p1WinnerState) {
        formElm.insertAdjacentHTML('beforebegin', '<p class="winnerMes">Player1 is winner <img src="JS1.gif" height="100" width="160"/><p/> ');
    } else if (p2WinnerState) {
        formElm.insertAdjacentHTML('beforebegin', '<p class="winnerMes">Player2 is winner  <img src="JS1.gif" height="100" width="160"/><p/>')
    }
}




restBtnElm.addEventListener('click', e => {
    winScore = 20;
    initialPlayState();
})


function initialPlayState() {
    p1Score = 0;
    p2Score = 0;
    turn = 'player1';

    winScoreElm.textContent = winScore;
    p1ScoreElm.textContent = p1Score;
    p2ScoreElm.textContent = p2Score;

    p1BtnElm.removeAttribute('disabled');
    p2BtnElm.removeAttribute('disabled');

    //reset winning message
    if (document.querySelector('.winnerMes')) {
        document.querySelector('.winnerMes').remove();
    }
}