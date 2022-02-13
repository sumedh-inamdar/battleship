import { computer, setupGame } from "../Control/setup_controller.js";
import { getAllSquares, getXYfromElement, removeAllChildren } from "../DOM/dom_helpers.js";
import crosshair from "../../images/Crosshairs_Red.svg";
import { userTurn, blockUserInput } from "../Control/gamePlay_controller.js";
import { initiateShipPlacement } from "../Control/shipPlacement_controller.js";

function _loadCrosshair(event) {
    const targetIcon = new Image();
    targetIcon.src = crosshair;
    targetIcon.classList.add("crosshair");
    event.target.appendChild(targetIcon);
}

function _removeCrosshair(event) {
    event.target.removeChild(event.target.firstChild);
}

export function removeAllAttackEL(square) {
    square.removeEventListener('mouseenter', _loadCrosshair);
    square.removeEventListener('mouseleave', _removeCrosshair);
    square.removeEventListener('click', _handleAttack);
}

function _handleAttack(event) {
    if (blockUserInput) return;

    let square = event.target.closest('.square');
    removeAllAttackEL(square);
    removeAllChildren(square);

    userTurn(...getXYfromElement(square));
}

function _restartGame(event) {
    document.querySelector('#endGameContainer').classList.add('hidden');
    setupGame();
    initiateShipPlacement();
}

export function addHoverCrosshairEL() {
    getAllSquares(computer.boardClass).forEach((sq) => {
        sq.addEventListener('mouseenter', _loadCrosshair);
        sq.addEventListener('mouseleave', _removeCrosshair);
    })
}

export function addClickAttackEL() {
    getAllSquares(computer.boardClass).forEach((sq) => {
        sq.addEventListener('click', _handleAttack);
    })
}

export function addClickRestartEL() {
    document.querySelector('#restartGame').addEventListener('click', _restartGame);
}