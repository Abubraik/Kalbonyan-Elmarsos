const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const calcDescription = `${currentResult} + ${getUserNumberInput()}`;
  currentResult = currentResult + getUserNumberInput();
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
