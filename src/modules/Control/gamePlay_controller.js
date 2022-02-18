import { getAllSquares } from "../DOM/dom_helpers";
import { focusBoard, renderBoard, renderBoardStatus, renderBoardXY, renderEndgameMsg, renderModal, renderShipsStatus, updateShipsSunk } from "../DOM/renderDOM";
import { addClickAttackEL, addClickRestartEL, addHoverCrosshairEL, removeAllAttackEL } from "../UI/gamePlay_UI";
import { generateRandInt } from "../Utilities/helper_func";
import { computer, user } from "./setup_controller";

export let blockUserInput;

function _endGame(winner) {
    
    const endMsg = (winner === user) ?  "You Win! Good job sinking all your opponents ships 😀" : "All your ships were sunk. You lost 🙁";

    getAllSquares(computer.boardClass).forEach((sq) => removeAllAttackEL(sq));
    renderBoard(user.board, user.boardClass, false);
    renderBoard(computer.board, computer.boardClass, false);
    updateShipsSunk();
    renderModal(endMsg);

    addClickRestartEL();
}

export function userTurn(x, y) {
    blockUserInput = true;
    
    user.player.sendAttack(x, y, computer.board);
    renderBoardXY(computer.board, x, y, computer.boardClass, false);
    renderBoardStatus(computer.boardClass, ``, 'bold');
    updateShipsSunk(computer.board.getShip(x, y), computer);

    if (computer.board.allSunk()) return _endGame(user);
    
    focusBoard(user.boardClass);
    renderBoardStatus(user.boardClass, `Thinking...`, "bold");
    
    setTimeout(compTurn, 0); // change to 500 - 2000ms later ( Math.max(500, generateRandInt(2000))) )
}

export function compTurn() {
    const target = computer.player.sendSmartAttack(user.board);
    renderBoardXY(user.board, target[0], target[1], user.boardClass, false);
    renderBoardStatus(user.boardClass, ``, "bold");
    updateShipsSunk(user.board.getShip(target[0], target[1]), user);

    if (user.board.allSunk()) return _endGame(computer);

    focusBoard(computer.boardClass);
    renderBoardStatus(computer.boardClass, `Place your attack!`, 'bold');
    
    blockUserInput = false;
}

export function startGame() {
    blockUserInput = false;
    focusBoard(computer.boardClass);
    
    addHoverCrosshairEL();
    addClickAttackEL();

    renderBoard(user.board, user.boardClass, false);
    renderBoard(computer.board, computer.boardClass, false);

    renderShipsStatus();
    renderBoardStatus(user.boardClass, ``, 'bold');
    renderBoardStatus(computer.boardClass, `Place your attack!`, 'bold');
}