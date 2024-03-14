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

const generateUserBoards = () => {
  const userBoards = document.getElementById("players-boards");
  const userCards = parseInt(document.getElementById("cards-numbers").value);
  userBoards.innerHTML = " ";
  for (let i = 0; i < userCards; i++) {
    const playerBoard = document.createElement("div");
    playerBoard.className = "player-board";
    playerBoard.innerHTML = "<h4> Cartella giocatore " + (i + 1) + "</h4>";
    for (let j = 0; j < 24; j++) {
      const num = getUniqueNum();
      const numberCell = document.createElement("span");
      numberCell.innerText = num;
      numberCell.className = "cell";
      playerBoard.appendChild(numberCell);
    }
    userBoards.appendChild(playerBoard);
  }
};
generateBoard();
