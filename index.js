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
  if (numCheck.includes(randomNum)) {
    return getUniqueNum();
  } else {
    return randomNum;
  }
};

const colorCellNum = (num) => {
  const numCell = document.querySelectorAll("#main-board .cell");
  numCell[num - 1].style.backgroundColor = "lightgreen";
};

const generateRandNum = () => {
  if (numCheck.length >= 90) {
    alert("Sono stati estratti tutti i numeri");
    return;
  }
  const randNum = getUniqueNum();
  numCheck.push(randNum);

  const randNumChecked = document.getElementById("rand-num");
  randNumChecked.innerText = "Numero estratto: " + randNum;

  colorCellNum(randNum);
};

generateBoard();
