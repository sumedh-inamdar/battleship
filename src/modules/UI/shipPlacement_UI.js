import { user } from "../Control/setup_controller.js";
import { getSquareElements, getXYfromElement, toggleShip } from "../DOM/dom_helpers.js";
import { placeShipsManual } from "../Control/shipPlacement_controller.js"
import { renderBoard } from "../DOM/renderDOM.js";
import { startGame } from "../Control/gamePlay_controller.js";

let currElementsEL;

function _removeAllShipPlacementEL() {
    document.removeEventListener("keydown", _handleRotate);

    currElementsEL.forEach((el) => {
        el.removeEventListener('mouseenter', _handleHover);
        el.removeEventListener('mouseleave', _handleHover);
        el.removeEventListener('click', _handleClick);
    });
}

function _handleRotate(event) {
    if (event.code === "KeyR") {
      user.shipVertical = !user.shipVertical;
      _removeAllShipPlacementEL();
      renderBoard(user.board, user.boardClass, false);
      placeShipsManual(user);
    }
}

function _handleHover(event) {
    const [x, y] = getXYfromElement(event.target);
    const currentShip = user.ships[user.shipIndex];
    const currentBoard = user.board;
    const currentVertical = user.shipVertical;

    const arrayCoords = currentBoard.getArrayCoords(currentShip.getLength(), x, y, currentVertical);
    const arrayCoordElements = getSquareElements(arrayCoords, user);
    toggleShip(arrayCoordElements, event);
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

    if (user.ships[user.shipIndex] !== undefined) placeShipsManual(user);
    else startGame();
}

export function addRotateShipEL() {
    document.addEventListener("keydown", _handleRotate);
}

export function addHoverShipPlaceEL(player, validLocations) {
    const validLocElements = getSquareElements(validLocations, player);
    currElementsEL = validLocElements;

    validLocElements.forEach((el) => {
      el.addEventListener('mouseenter', _handleHover);
      el.addEventListener('mouseleave', _handleHover);
    });
}

export function addClickShipPlaceEL(player, validLocations) {
    const validLocElements = getSquareElements(validLocations, player);

    validLocElements.forEach((el) => {
        el.addEventListener('click', _handleClick);
    });
}
