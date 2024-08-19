const objectsArr = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let count = 0;
const userSelect = document.querySelectorAll('.choice-container .img-choice')
const user = document.querySelector('.human-choice span');
const computer = document.querySelector('.computer-choice span');
const output = document.querySelector('.output');
const startGame = document.querySelector('.start');
const container = document.querySelector('.game .container')
const counter = document.querySelector('.counter')
const winnerTrophy = document.querySelector('.hidden.win');
const loserTrophy = document.querySelector('.hidden.lose');
const stalemate = document.querySelector('.hidden.draw');




const getRandomNumber = () => Math.floor(Math.random() * objectsArr.length);

container.style.display = "none";


startGame.addEventListener('click',()=> {
    container.style.display = 'block'
    startGame.style.display = 'none'
})
// computer()
const getComputerChoice = () => objectsArr[getRandomNumber()];


let userChoice;
userSelect.forEach(item =>  {
    item.addEventListener('click', (e) => {
        userChoice = (e.target.id)
        
        function playRound(humanChoice, computerChoice) {
            const checkChoice = (humanChoice, computerChoice) => {
        
                if( (humanChoice === 'rock' && computerChoice === 'paper') || 
                (humanChoice === 'paper' && computerChoice === 'scissors') || 
                (humanChoice === 'scissors' && computerChoice === 'rock' ) ) {
                    ++computerScore;
                    counter.textContent = ++count;
                        return  'You lose! Computer beats you'
                }
                else if(  
                    (humanChoice === 'rock' && computerChoice === 'scissors' ) || 
                    (humanChoice === 'paper' && computerChoice === 'rock' ) || 
                    (humanChoice === 'scissors' && computerChoice === 'paper' )  ) {
                        ++humanScore;
                        counter.textContent = ++count;
                        return 'You win! human beats computer'
                }
                else if(humanChoice === computerChoice ) {
                    counter.textContent = ++count;
                    return 'Draw'
                }
        
        
            }
            
            user.textContent = ` ${humanChoice}`;
            computer.textContent = ` ${computerChoice}`;
            output.textContent = checkChoice(humanChoice, computerChoice);
        
        }
        const humanSelection = userChoice;
        const computerSelection = getComputerChoice;
        function playGame() {
            playRound(humanSelection, computerSelection());
            
            if(count <= 5) {
                console.log(humanScore,'human');
                console.log(computerScore,'computer')
                if(count == 5)  {
                    let result = (humanScore > computerScore) ? winnerTrophy.classList.remove('hidden') : (computerScore > humanScore) ? loserTrophy.classList.remove('hidden'): stalemate.classList.remove('hidden');
                    count = 0;
                    computerScore = 0;
                    humanScore = 0;
                    counter.textContent = count;
                    startGame.style.display ='block'
                    container.style.display = 'none'
                    output.textContent = '❗️❗️'
                    
                }
                else {
                    startGame.style.display ='none'
                    winnerTrophy.classList.add('hidden');
                    loserTrophy.classList.add('hidden')
                    stalemate.classList.add('hidden')
                }
                
            }
        }
        playGame()
    })
})















