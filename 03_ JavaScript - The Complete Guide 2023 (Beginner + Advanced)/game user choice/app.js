const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = "DRAW";
const PLAYER_WINS = "PLAYER_WINS";
const COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) return ROCK;
  else if (randomValue < 0.67) return PAPER;
  else return SCISSORS;
};

const getWinner = (cChoise, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoise === pChoice) return DRAW;
  else if (
    (cChoise === ROCK && pChoice === PAPER) ||
    (cChoise === PAPER && pChoice === SCISSORS) ||
    (cChoise === SCISSORS && pChoice === ROCK)
  )
    return PLAYER_WINS;
  else return COMPUTER_WINS;
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, there for you`;
  if (winner === DRAW) {
    message += " had a draw.";
  } else if (winner == PLAYER_WINS) {
    message += " won";
  } else {
    message += " lost";
  }

  alert(message);
  gameIsRunning = false;
});
