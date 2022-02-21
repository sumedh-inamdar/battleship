/* eslint-disable no-use-before-define */
import { computer, user } from '../Data/game-objects';
import { renderBoard, renderBoardStatus } from '../DOM/render-dom';
import {
  generateRandBool,
  getRandomItemFromArray,
} from '../Utilities/helper-functions';
import {
  getSquareElements,
  getXYfromElement,
  toggleShip,
} from '../DOM/dom-helpers';
import { getArrayCoords } from '../Factory/gameboard-helpers';
import startGame from './gameplay-controller';

let currentElementsWithEL;

function _placeShipsRandom(player) {
  player.ships.forEach((ship) => {
    const nextVert = generateRandBool();
    const validLocations = player.board.getValidShipPlacements(ship, nextVert);
    const [nextX, nextY] = getRandomItemFromArray(validLocations);

    player.board.placeShip(ship, nextX, nextY, nextVert);
  });
}

function _removeAllShipPlacementEL() {
  document.removeEventListener('keydown', _handleRotate);

  currentElementsWithEL.forEach((element) => {
    element.removeEventListener('mouseenter', _handleHover);
    element.removeEventListener('mouseleave', _handleHover);
    element.removeEventListener('click', _handleClick);
  });
}

function _handleHover(event) {
  const [x, y] = getXYfromElement(event.target);
  const currentShip = user.ships[user.shipIndex];
  const currentVertical = user.shipVertical;

  const arrayCoords = getArrayCoords(
    currentShip.getLength(),
    x,
    y,
    currentVertical
  );
  const arrayCoordElements = getSquareElements(arrayCoords, user);
  toggleShip(arrayCoordElements, event);
}

function _handleRotate(event) {
  if (event.code === 'KeyR') {
    user.shipVertical = !user.shipVertical;
    _removeAllShipPlacementEL();
    renderBoard(user.board, user.boardClass, false);
    _placeShipsManual(user);
  }
}

function _handleClick(event) {
  const [x, y] = getXYfromElement(event.target);
  const currentShip = user.ships[user.shipIndex];
  const currentBoard = user.board;
  const currentVertical = user.shipVertical;

  currentBoard.placeShip(currentShip, x, y, currentVertical);
  _removeAllShipPlacementEL();
  renderBoard(currentBoard, user.boardClass, false);
  user.shipIndex += 1;

  if (user.ships[user.shipIndex] !== undefined) _placeShipsManual(user);
  else startGame();
}

function _addRotateShipEL() {
  document.addEventListener('keydown', _handleRotate);
}

function _addHoverShipPlaceEL(player, validLocations) {
  const validLocElements = getSquareElements(validLocations, player);
  currentElementsWithEL = validLocElements;

  validLocElements.forEach((element) => {
    element.addEventListener('mouseenter', _handleHover);
    element.addEventListener('mouseleave', _handleHover);
  });
}

function _addClickShipPlaceEL(player, validLocations) {
  const validLocElements = getSquareElements(validLocations, player);

  validLocElements.forEach((element) => {
    element.addEventListener('click', _handleClick);
  });
}

function _placeShipsManual(player) {
  const currentShip = player.ships[player.shipIndex];
  const currentVertical = player.shipVertical;

  const validLocations = player.board.getValidShipPlacements(
    currentShip,
    currentVertical
  );

  _addRotateShipEL();
  _addHoverShipPlaceEL(player, validLocations);
  _addClickShipPlaceEL(player, validLocations);

  renderBoardStatus(
    player.boardClass,
    `Place ${currentShip.getName()}`,
    'bold'
  );
  renderBoardStatus(
    player.boardClass,
    `(Press R to rotate ship)`,
    'regular',
    false
  );
}

export default function initiateShipPlacement() {
  user.shipVertical = true;
  user.shipIndex = 0;

  _placeShipsRandom(computer);
  _placeShipsManual(user);
}
