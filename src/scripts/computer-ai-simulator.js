import Gameboard from '../Modules/Factory/gameboard';
import Player from '../Modules/Factory/player';
import { shipTemplate } from '../Modules/constants';
import { generateShips } from '../Modules/Control/setup-controller';
import { placeShipsRandom } from '../Modules/Control/ship-placement-controller';
import { sendRandomAttack } from '../Modules/Factory/player-helpers';

const CYCLES = 100;

const computer = {};

export function simulateSmartHunting() {
  const arrayHitsToEnd = [];
  for (let index = 0; index < CYCLES; index += 1) {
    let hitCounter = 0;
    computer.player = Player('computer');
    computer.board = Gameboard();
    computer.ships = generateShips(shipTemplate);

    placeShipsRandom(computer);

    while (!computer.board.allSunk()) {
      computer.player.sendSmartAttack(computer.board);
      hitCounter += 1;
    }

    arrayHitsToEnd.push(hitCounter);
  }

  console.log(arrayHitsToEnd);
}

export function simulateRandomHunting() {
  const arrayHitsToEnd = [];
  for (let index = 0; index < CYCLES; index += 1) {
    let hitCounter = 0;
    computer.player = Player('computer');
    computer.board = Gameboard();
    computer.ships = generateShips(shipTemplate);

    placeShipsRandom(computer);

    while (!computer.board.allSunk()) {
      computer.player.sendSmartAttack(computer.board, 'random');
      hitCounter += 1;
    }

    arrayHitsToEnd.push(hitCounter);
  }

  console.log(arrayHitsToEnd);
}

export function simulateRandomAttack() {
  const arrayHitsToEnd = [];
  for (let index = 0; index < CYCLES; index += 1) {
    let hitCounter = 0;
    computer.player = Player('computer');
    computer.board = Gameboard();
    computer.ships = generateShips(shipTemplate);

    placeShipsRandom(computer);

    while (!computer.board.allSunk()) {
      sendRandomAttack(computer.board);
      hitCounter += 1;
    }

    arrayHitsToEnd.push(hitCounter);
  }

  console.log(arrayHitsToEnd);
}
