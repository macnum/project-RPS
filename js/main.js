const objectsArr = ['rock', 'paper', 'scissors'];
const arrOfHumanChoice = [];
const arrOfComputerChoice = [];
let humanScore = 0;
let computerScore = 0;

const user = document.querySelector('.human-choice span');
const computer = document.querySelector('.computer-choice span');
const userScore = document.querySelector('.human-score')
const compScore = document.querySelector('.computer-score')
const output = document.querySelector('.output');
const humanChoiceArr = document.querySelector('.human-choice-array');
const computerChoiceArr = document.querySelector('.computer-choice-array')


const getRandomNumber = () => Math.floor(Math.random() * objectsArr.length);

// computer()
const getComputerChoice = () => objectsArr[getRandomNumber()];



// user() 
const getHumanChoice = () => {
    let userChoice = prompt(`Enter an input btw ${objectsArr[0]}, ${objectsArr[1]}or ${objectsArr[2]}`).toLowerCase();

    return userChoice;
};



//play()
function playRound(humanChoice, computerChoice) {
    arrOfComputerChoice.push(computerChoice);
    arrOfHumanChoice.push(humanChoice);
    const checkChoice = (humanChoice, computerChoice) => {

        if( (humanChoice === 'rock' && computerChoice === 'paper') || 
        (humanChoice === 'paper' && computerChoice === 'scissors') || 
        (humanChoice === 'scissors' && computerChoice === 'rock' ) ) {
            compScore.textContent = ++computerScore;
                return  'You lose! Computer beats you'
        }
        else if(  
            (humanChoice === 'rock' && computerChoice === 'scissors' ) || 
            (humanChoice === 'paper' && computerChoice === 'rock' ) || 
            (humanChoice === 'scissors' && computerChoice === 'paper' )  ) {
                userScore.textContent = ++humanScore;
                return 'You win! human beats computer'
        }
        else if(humanChoice === computerChoice ) {
            return 'Draw'
        }
        else {
            return 'Invalid "USER" Choice'
        }


    }
    
    user.textContent = ` ${humanChoice}`;
    computer.textContent = ` ${computerChoice}`;
    output.textContent = checkChoice(humanChoice, computerChoice);

}


const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;




function playGame() {
    for (var i = 0; i < 5; i++) {
        playRound(humanSelection(), computerSelection());
    }
    
    const checkResult = () => {
        return humanScore > computerScore ? 'user win': humanScore < computerScore ? 'computer wins' : "A tie";
    }
    output.textContent = checkResult();
    computerChoiceArr.textContent = arrOfComputerChoice;
    humanChoiceArr.textContent = arrOfHumanChoice;
}
playGame()




