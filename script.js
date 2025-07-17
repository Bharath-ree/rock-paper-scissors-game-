function getcomputerchoice() {
    Math.random();
    let randomNumber = Math.random();

    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}
  
function gethumancoice() {
    let userChoice = prompt("Enter your choice: rock, paper, or scissors");
    return userChoice;
}

let humanscore = 0;
let computerscore = 0;
function playround(humanchoice, computerChoice){
    humanchoice = humanchoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()   
    if (humanchoice === computerChoice) {
        return `It's a tie! Your score: ${humanscore}, Computer score: ${computerscore}`;
    }
    if (humanchoice === 'rock' && computerChoice === 'scissors' ||
        humanchoice === 'paper' && computerChoice === 'rock' ||
        humanchoice === 'scissors' && computerChoice === 'paper') {
        humanscore++;
        return `You win! ${humanchoice} beats ${computerChoice}. Your score: ${humanscore}, Computer score: ${computerscore}`;
    } else {
        computerscore++;    
        return `You lose! ${computerChoice} beats ${humanchoice}. Your score: ${humanscore}, Computer score: ${computerscore}`;
    }

}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerChoice = getcomputerchoice();
        const humanChoice = gethumancoice();
        console.log(playround(humanChoice, computerChoice));
    }
    
    // Determine final winner
    if (humanscore > computerscore) {
        console.log(`Game Over! You win! Final score - You: ${humanscore}, Computer: ${computerscore}`);
    } else if (computerscore > humanscore) {
        console.log(`Game Over! Computer wins! Final score - You: ${humanscore}, Computer: ${computerscore}`);
    } else {
        console.log(`Game Over! It's a tie! Final score - You: ${humanscore}, Computer: ${computerscore}`);
    }
    
    // Reset scores for next game
    humanscore = 0;
    computerscore = 0;
}
playGame();




