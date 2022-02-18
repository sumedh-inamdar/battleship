import { computer, user } from "../Control/setup_controller";
import { rmUpCaseWhtSpace } from "../Utilities/helper_func";
import { removeAllChildren } from "./dom_helpers";

function _renderState(board, x, y, locationID) {
  const state = board.getState(x, y);
  if (state !== "blank") {
    const square = document.querySelector(`#${locationID}`);
    square.classList.add(state);
    square.textContent = state === "hit" ? "X" : "O";
  }
}

function _renderShips(board, x, y, locationID) {
  const square = document.querySelector(`#${locationID}`);
  if (board.getShip(x, y) !== null) square.classList.add("ship");
  else square.classList.remove("ship");
}

export function renderModal(endMsg) {
  let modal = document.querySelector('.modal');
  let modalRestart = modal.querySelector('.restartGame');
  let postModalRestart = document.querySelector('.postModal .restartGame');

  modalRestart.classList.remove('hidden');
  modal.style.display = "flex";
  document.querySelector('#endGameStatus').textContent = endMsg;
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      postModalRestart.classList.remove('hidden');
    }
  }

}

export function removeModal() {
  let modal = document.querySelector('.modal');
  modal.style.display = "none";
}

export function removeRestartGame() {
  document.querySelectorAll('.restartGame').forEach((el) => {
    el.classList.add('hidden');
  })
}

export function focusBoard(boardSide) {
  document.querySelectorAll('.leftBoard, .rightBoard').forEach(el => el.classList.remove('boardHighlight'));
  document.querySelector(`.${boardSide}`).classList.add('boardHighlight');
}

export function renderGrid(boardSide) {
  const board = document.querySelector(`.${boardSide} > .board`);
  removeAllChildren(board);
  
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.id = boardSide + j + i;
      board.appendChild(square);
    }
  }
}

export function renderBoardTitle(title, boardSide) {
  const boardTitle = document.querySelector(`.${boardSide} > .boardTitle`);
  boardTitle.textContent = title;
}

export function renderBoardStatus(
  boardSide,
  status,
  style,
  clearStatus = true
) {
  const boardStatusContainer = document.querySelector(
    `.${boardSide} > .boardStatus`
  );

  if (clearStatus === true) removeAllChildren(boardStatusContainer);

  const boardStatusDIV = document.createElement("div");
  boardStatusDIV.classList.add(style);
  boardStatusDIV.textContent = status;

  boardStatusContainer.appendChild(boardStatusDIV);
}
export function setupShipsSunk() {
  document.querySelectorAll('.sunkText, .shipStatus').forEach((el) => {
    el.classList.add('hidden');
  });
  document.querySelectorAll('.shipSunk').forEach((el) => {
    el.classList.remove('shipSunk');
  })
}

export function renderShipsStatus() {
  document.querySelectorAll('.shipStatus').forEach((el) => {
    el.classList.remove('hidden');
  })
}
export function updateShipsSunk(ship, player) {
  if (ship && ship.isSunk()) {
    const shipSelector = `.${player.boardClass} .${rmUpCaseWhtSpace(ship.getName())}`;
    const shipSpan = document.querySelector(shipSelector);
    shipSpan.classList.add('shipSunk');

    shipSpan.nextElementSibling.classList.remove('hidden');

    renderBoardStatus(player.boardClass, `${ship.getName()} was sunk!`, "bold");
  }
}

export function renderBoardXY(board, x, y, boardSide, hideShips) {
  const locationID = boardSide + x + y;
  if (hideShips === false) _renderShips(board, x, y, locationID);
  _renderState(board, x, y, locationID);
}

export function renderBoard(board, boardSide, hideShips) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      renderBoardXY(board, j, i, boardSide, hideShips);
    }
  }
}






