let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates a random target number.
const generateTarget = () => Math.floor(Math.random() * 10);

// This function compares if the user is closer to the target number or computer is closer to the target number
const compareGuesses = (userGuess, target, computerGuess) => {
  const humanGuess = Math.abs(target - userGuess);
  const compGuess = Math.abs(target - computerGuess);
  return humanGuess <= compGuess;
}

// This function updates the score of humanScore variable or computerScore variable depending on what was passed as the arguement.
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer'){
    computerScore += 1;
  } else {
    return 'ERROR';
  }
}

// This function increases the variable currentRoundNumber by 1
const advanceRound = () => currentRoundNumber += 1;