const generateBoard = () => {
  const board = document.getElementById("main-board");
  for (let i = 1; i <= 90; i++) {
    const numberCellDiv = document.createElement("div");
    numberCellDiv.className = "cell";
    numberCellDiv.innerText = i;
    board.appendChild(numberCellDiv);
  }
};

const numCheck = [];

const getRandNum = () => {
  return Math.floor(Math.random() * 90) + 1;
};

const getUniqueNum = () => {
  const randomNum = getRandNum();
  if (numCheck.incluedes(randomNum)) {
    return getUniqueNum();
  } else {
    return randomNum;
  }
};

const generateRandNum = () => {};

generateBoard();

const randBtn = document.getElementById("randBtn");
randBtn.addEventListener("click", () => {
  generateRandNum();
});
