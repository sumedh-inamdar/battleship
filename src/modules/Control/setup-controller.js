/* eslint-disable no-use-before-define */
import Gameboard from '../Factory/gameboard';
import Player from '../Factory/player';
import Ship from '../Factory/ship';
import { shipTemplate } from '../constants';
import {
  renderGrid,
  renderBoardTitle,
  renderBoardStatus,
  focusBoard,
  setupShipsSunk,
  removeModal,
  removeRestartGame,
} from '../DOM/render-dom';
import initiateShipPlacement from './ship-placement-controller';
import { user, computer } from '../Data/game-objects';

function _generateShips(shipInfo) {
  const shipArray = [];

  shipInfo.forEach((ship) => {
    shipArray.push(Ship(ship.length, ship.name));
  });

  return shipArray;
}

function _setupGameObjects(player1, player2, shipInfo) {
  player1.player = Player(player1.name);
  player2.player = Player(player2.name);

  player1.board = Gameboard();
  player2.board = Gameboard();

  player1.ships = _generateShips(shipInfo);
  player2.ships = _generateShips(shipInfo);
}

function _setupDOM(player1, player2) {
  renderGrid(player1.boardClass);
  renderGrid(player2.boardClass);

  renderBoardTitle(player1.player.getName(), player1.boardClass);
  renderBoardTitle(player2.player.getName(), player2.boardClass);

  renderBoardStatus(player1.boardClass, '', 'bold'); // clears any previous board status
  renderBoardStatus(player2.boardClass, '', 'bold');

  setupShipsSunk();
  addClickRestartEL();

  focusBoard(player1.boardClass);
}

function addClickRestartEL() {
  document.querySelectorAll('.restartGame').forEach((element) => {
    element.addEventListener('click', _restartGame);
  });
}

function _restartGame() {
  removeModal();
  removeRestartGame();
  setupGame();
  initiateShipPlacement();
}

export default function setupGame() {
  _setupGameObjects(user, computer, shipTemplate);
  _setupDOM(user, computer);
}
