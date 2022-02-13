import { getAllSquares } from "../DOM/dom_helpers";
import { focusBoard, renderBoard, renderBoardStatus, renderBoardXY, renderEndgameMsg, updateShipsSunk } from "../DOM/renderDOM";
import { addClickAttackEL, addClickRestartEL, addHoverCrosshairEL, removeAllAttackEL } from "../UI/gamePlay_UI";
import { computer, user } from "./setup_controller";

export let blockUserInput;

function _endGame(winner) {
    let endMsg = (winner === user) ?  "You Win! Good job sinking all your opponents ships 😀" : "All your ships were sunk. You lost 🙁";

    getAllSquares(computer.boardClass).forEach((sq) => removeAllAttackEL(sq));
    renderBoard(user.board, user.boardClass, false);
    renderBoard(computer.board, computer.boardClass, false);
    updateShipsSunk();
    renderEndgameMsg(endMsg);

    addClickRestartEL();
}

export function userTurn(x, y) {
    blockUserInput = true;
    
    user.player.sendAttack(x, y, computer.board);
    if (computer.board.allSunk()) return _endGame(user);

    renderBoardXY(computer.board, x, y, computer.boardClass, false);
    updateShipsSunk();
    focusBoard(user.boardClass);
    renderBoardStatus(user.boardClass, `Thinking...`, "bold");
    
    setTimeout(compTurn, 0); // change to 500 - 2000ms later
}

export function compTurn() {
    const [_, target] = computer.player.sendRandomAttack(user.board);
    if (user.board.allSunk()) return _endGame(computer);

    renderBoardXY(user.board, target[0], target[1], user.boardClass, false);
    updateShipsSunk();
    focusBoard(computer.boardClass);
    renderBoardStatus(computer.boardClass, `Place your attack!`, 'regular', false);

    blockUserInput = false;
}

export function startGame() {
    blockUserInput = false;
    focusBoard(computer.boardClass);
    
    addHoverCrosshairEL();
    addClickAttackEL();

    renderBoard(user.board, user.boardClass, false);
    renderBoard(computer.board, computer.boardClass, false);

    updateShipsSunk();
    renderBoardStatus(computer.boardClass, `Place your attack!`, 'regular', false);
}