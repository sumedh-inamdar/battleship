import {
  getAllSquares,
  getXYfromElement,
  removeAllChildren,
} from '../DOM/dom-helpers';
import {
  focusBoard,
  renderBoard,
  renderBoardStatus,
  renderBoardXY,
  renderModal,
  renderShipsStatus,
  updateShipsSunk,
} from '../DOM/render-dom';
import crosshair from '../../images/Crosshairs_Red.svg';
import { computer, user } from '../Data/game-objects';

let _blockUserInput;

function loadCrosshair(event) {
  const targetIcon = new Image();
  targetIcon.src = crosshair;
  targetIcon.classList.add('crosshair');
  event.target.append(targetIcon);
}

function removeCrosshair(event) {
  removeAllChildren(event.target);
}

function addHoverCrosshairEL() {
  getAllSquares(computer.boardClass).forEach((square) => {
    square.addEventListener('mouseenter', loadCrosshair);
    square.addEventListener('mouseleave', removeCrosshair);
  });
}

function _removeAttackEventListener(square) {
  square.removeEventListener('mouseenter', loadCrosshair);
  square.removeEventListener('mouseleave', removeCrosshair);
  // eslint-disable-next-line no-use-before-define
  square.removeEventListener('click', _handleAttack);
}

function _endGame(winner) {
  const endMessage =
    winner === user
      ? 'You Win! Good job sinking all your opponents ships 😀'
      : 'All your ships were sunk. You lost 🙁';

  getAllSquares(computer.boardClass).forEach((sq) =>
    _removeAttackEventListener(sq)
  );
  renderBoard(user.board, user.boardClass, false);
  renderBoard(computer.board, computer.boardClass, false);
  updateShipsSunk();
  renderModal(endMessage);
}

function compTurn() {
  const target = computer.player.sendSmartAttack(user.board);
  renderBoardXY(user.board, target[0], target[1], user.boardClass, false);
  renderBoardStatus(user.boardClass, ``, 'bold');
  updateShipsSunk(user.board.getShip(target[0], target[1]), user);

  if (user.board.allSunk()) _endGame(computer);

  focusBoard(computer.boardClass);
  renderBoardStatus(computer.boardClass, `Place your attack!`, 'bold');

  _blockUserInput = false;
}

function userTurn(x, y) {
  _blockUserInput = true;

  computer.board.receiveAttack(x, y);
  renderBoardXY(computer.board, x, y, computer.boardClass, false);
  renderBoardStatus(computer.boardClass, ``, 'bold');
  updateShipsSunk(computer.board.getShip(x, y), computer);

  if (computer.board.allSunk()) _endGame(user);

  focusBoard(user.boardClass);
  renderBoardStatus(user.boardClass, `Thinking...`, 'bold');

  setTimeout(compTurn, 0); // change to 500 - 2000ms later ( Math.max(500, generateRandInt(2000))) )
}

function _handleAttack(event) {
  if (_blockUserInput) return;

  const square = event.target.closest('.square');
  _removeAttackEventListener(square);
  removeAllChildren(square);

  userTurn(...getXYfromElement(square));
}

function _setupAttackEventListener() {
  getAllSquares(computer.boardClass).forEach((square) => {
    square.addEventListener('click', _handleAttack);
  });
}

export default function startGame() {
  _blockUserInput = false;
  focusBoard(computer.boardClass);

  addHoverCrosshairEL();
  _setupAttackEventListener();

  renderBoard(user.board, user.boardClass, false);
  renderBoard(computer.board, computer.boardClass, false);

  renderShipsStatus();
  renderBoardStatus(user.boardClass, ``, 'bold');
  renderBoardStatus(computer.boardClass, `Place your attack!`, 'bold');
}
