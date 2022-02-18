import { user, computer } from './setup_controller.js';
import { renderBoardStatus } from '../DOM/renderDOM.js';
import { generateRandBool, getRandomItemFromArray } from '../Utilities/helper_func.js';
import { addRotateShipEL, addHoverShipPlaceEL, addClickShipPlaceEL } from '../UI/shipPlacement_UI.js';

function _placeShipsRandom(player) {
    player.ships.forEach((ship) => {
    
      const gen_vert = generateRandBool();
      const validLocations = player.board.getValidShipPlacements(ship, player.board, gen_vert);
      const [gen_x, gen_y] = getRandomItemFromArray(validLocations);

      player.board.placeShip(ship, gen_x, gen_y, gen_vert);
    });
}

export function placeShipsManual(player) {
    const currentShip = player.ships[player.shipIndex];
    const currentBoard = player.board;
    const currentVertical = player.shipVertical;

    const validLocations = player.board.getValidShipPlacements(currentShip, currentBoard, currentVertical);

    addRotateShipEL();
    addHoverShipPlaceEL(player, validLocations); 
    addClickShipPlaceEL(player, validLocations);

    renderBoardStatus(
        player.boardClass, 
        `Place ${currentShip.getName()}`, 
        "bold"
    );
    renderBoardStatus(
        player.boardClass,
        `(Press R to rotate ship)`,
        "regular",
        false
    );
}

export function initiateShipPlacement() {
    
    user.shipVertical = true;
    user.shipIndex = 0;

    _placeShipsRandom(computer);
    placeShipsManual(user);
}