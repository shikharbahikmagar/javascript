let randNum = parseInt(Math.random() * 100 + 1);

const subt = document.querySelector("#subt");
const inputField = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const p = document.createElement("p");

const startOver = document.querySelector(".resultParas");

let prevGuess = [];
let numGuess = 1;
 
let playGame = true;

if(playGame)
{
    subt.addEventListener('click', function(e)
    {
        e.preventDefault();
        const value = parseInt(inputField.value);

        validateGuess(value);
        // console.log(value);
    })
}

function validateGuess(guess)
{
    if (isNaN(guess))
    {
        
    }
    else if(guess<1 || guess>100)
    {
        alert("Please Enter a number between 1 and 100");
    }else
    {
        prevGuess.push(guess);
        if(numGuess == 10)
        {
            displayGuess(guess)
            displayMessage(`Game Over. Random Numer was ${randNum}`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
        
    }
}


function checkGuess(guess)
{
    if (guess == randNum) 
    {
        displayMessage("you guessed it right");
        endGame();
    }
    else if(guess>randNum)
    {
        displayMessage("Number is too high");
    }
    else if(guess<randNum)
    {
        displayMessage("Number is too low");
    }
}

function displayGuess(guess) {
    inputField.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
    console.log((randNum));
}


function endGame()
{
    inputField.value = '';
    inputField.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame()
{
    const newGamebtn = document.querySelector("#newGame");
    newGamebtn.addEventListener('click', function(e)
    {
        randNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        inputField.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })
}





