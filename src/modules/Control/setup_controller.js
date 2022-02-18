import Gameboard from "../Factory/Gameboard.js";
import Player from "../Factory/Player";
import Ship from "../Factory/Ship";
import { shipTemplate, userConstants, computerConstants } from '../Constants';
import { renderGrid, renderBoardTitle, renderBoardStatus, focusBoard, setupShipsSunk, renderModal } from '../DOM/renderDOM';
import { addClickRestartEL } from "../UI/gamePlay_UI.js";

export let user, computer;

function _generateShips(shipInfo) {
    const shipArray = [];

    shipInfo.forEach(ship => {
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

    renderBoardStatus(player1.boardClass, "", "bold"); // clears any previous board status
    renderBoardStatus(player2.boardClass, "", "bold");

    setupShipsSunk();

    focusBoard(player1.boardClass);
}

export function setupGame() {

    user = Object.assign({}, userConstants);
    computer = Object.assign({}, computerConstants);
    
    _setupGameObjects(user, computer, shipTemplate);
    _setupDOM(user, computer);

}