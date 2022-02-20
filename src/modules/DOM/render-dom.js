import { rmUpCaseWhtSpace } from '../Utilities/helper-functions';
import { removeAllChildren } from './dom-helpers';

function _renderState(board, x, y, locationID) {
  const state = board.getState(x, y);
  if (state !== 'blank') {
    const square = document.querySelector(`#${locationID}`);
    square.classList.add(state);
    square.textContent = state === 'hit' ? 'X' : 'O';
  }
}

function _renderShips(board, x, y, locationID) {
  const square = document.querySelector(`#${locationID}`);
  if (board.getShip(x, y) !== undefined) square.classList.add('ship');
  else square.classList.remove('ship');
}

function _displayModal(event) {
  const modal = document.querySelector('.modal');
  const postModalRestart = document.querySelector('.postModal .restartGame');
  if (event.target === modal) {
    modal.style.display = 'none';
    postModalRestart.classList.remove('hidden');
  }
}

export function renderModal(endMessage) {
  const modal = document.querySelector('.modal');
  const modalRestart = modal.querySelector('.restartGame');

  modalRestart.classList.remove('hidden');
  modal.style.display = 'flex';
  document.querySelector('#endGameStatus').textContent = endMessage;

  window.addEventListener('click', _displayModal);
}

export function removeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
}

export function removeRestartGame() {
  document.querySelectorAll('.restartGame').forEach((element) => {
    element.classList.add('hidden');
  });
}

export function focusBoard(boardSide) {
  document
    .querySelectorAll('.leftBoard, .rightBoard')
    .forEach((element) => element.classList.remove('boardHighlight'));
  document.querySelector(`.${boardSide}`).classList.add('boardHighlight');
}

export function renderGrid(boardSide) {
  const board = document.querySelector(`.${boardSide} > .board`);
  removeAllChildren(board);

  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.id = boardSide + x + y;
      board.append(square);
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

  const boardStatusDIV = document.createElement('div');
  boardStatusDIV.classList.add(style);
  boardStatusDIV.textContent = status;

  boardStatusContainer.append(boardStatusDIV);
}
export function setupShipsSunk() {
  document.querySelectorAll('.sunkText, .shipStatus').forEach((element) => {
    element.classList.add('hidden');
  });
  document.querySelectorAll('.shipSunk').forEach((element) => {
    element.classList.remove('shipSunk');
  });
}

export function renderShipsStatus() {
  document.querySelectorAll('.shipStatus').forEach((element) => {
    element.classList.remove('hidden');
  });
}
export function updateShipsSunk(ship, player) {
  if (ship && ship.isSunk()) {
    const shipSelector = `.${player.boardClass} .${rmUpCaseWhtSpace(
      ship.getName()
    )}`;
    const shipSpan = document.querySelector(shipSelector);
    shipSpan.classList.add('shipSunk');

    shipSpan.nextElementSibling.classList.remove('hidden');

    renderBoardStatus(player.boardClass, `${ship.getName()} was sunk!`, 'bold');
  }
}

export function renderBoardXY(board, x, y, boardSide, hideShips) {
  const locationID = boardSide + x + y;
  if (hideShips === false) _renderShips(board, x, y, locationID);
  _renderState(board, x, y, locationID);
}

export function renderBoard(board, boardSide, hideShips) {
  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      renderBoardXY(board, x, y, boardSide, hideShips);
    }
  }
}
