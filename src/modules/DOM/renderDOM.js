import { computer, user } from "../Control/setup_controller";
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

export function renderEndgameMsg(endMsg) {
  document.querySelector('#endGameStatus').textContent = endMsg;
  document.querySelector("#endGameContainer").classList.remove('hidden');
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

export function updateShipsSunk() {
  renderBoardStatus(
    computer.boardClass,
    `${computer.board.getQtySunk()}/5 ships sunk`,
    "bold"
  );
  renderBoardStatus(
    user.boardClass,
    `${user.board.getQtySunk()}/5 ships sunk`,
    "bold"
  );
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






