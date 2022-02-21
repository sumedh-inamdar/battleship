import { getRandomItemFromArray } from '../Utilities/helper-functions';
import { coordIsWithinBoard, getArrayCoords } from './gameboard-helpers';

export default function Gameboard() {
  const _size = 10;
  // eslint-disable-next-line unicorn/no-new-array
  const _board = [...new Array(_size)].map(() => new Array(_size));
  const _ships = [];

  for (let x = 0; x < _size; x += 1) {
    for (let y = 0; y < _size; y += 1) {
      _board[x][y] = {
        ship: undefined,
        state: 'blank',
      };
    }
  }

  function getState(x, y) {
    return _board[x][y].state;
  }

  function getShip(x, y) {
    return _board[x][y].ship;
  }

  function getAvailableTargets() {
    const targets = [];
    for (let x = 0; x < _size; x += 1) {
      for (let y = 0; y < _size; y += 1) {
        if (getState(x, y) === 'blank') targets.push([x, y]);
      }
    }
    return targets;
  }

  function getQtySunk() {
    return _ships.reduce(
      (previous, current) => previous + (current.isSunk() ? 1 : 0),
      0
    );
  }

  function allSunk() {
    if (_ships.length === 0) return false;

    return _ships.every((ship) => ship.isSunk());
  }

  function isValidPlacement(shipLength, x, y, isVertical) {
    return getArrayCoords(shipLength, x, y, isVertical).every(
      (xyCoords) =>
        coordIsWithinBoard(...xyCoords, _size) &&
        getShip(...xyCoords) === undefined
    );
  }

  function getValidShipPlacements(ship, isVertical) {
    const validLocations = [];

    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        if (isValidPlacement(ship.getLength(), x, y, isVertical)) {
          validLocations.push([x, y]);
        }
      }
    }

    return validLocations;
  }

  function placeShip(ship, x, y, isVertical) {
    if (isValidPlacement(ship.getLength(), x, y, isVertical)) {
      getArrayCoords(ship.getLength(), x, y, isVertical).forEach((xyCoords) => {
        _board[xyCoords[0]][xyCoords[1]].ship = ship;
      });
      _ships.push(ship);

      return true;
    }
    return false;
  }

  function isValidAttackLoc(x, y) {
    return coordIsWithinBoard(x, y, _size) && getState(x, y) === 'blank';
  }

  function receiveAttack(x, y) {
    if (!isValidAttackLoc(x, y)) return false;

    if (getShip(x, y) !== undefined) {
      getShip(x, y).hit([x, y]);
      _board[x][y].state = 'hit';
    } else {
      _board[x][y].state = 'miss';
    }
    return true;
  }

  function getBlankNeighbors(x, y) {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ].filter((neighbor) => isValidAttackLoc(...neighbor));
  }

  function getRandomBlankNeighbor(loc) {
    return getBlankNeighbors(...loc).length === 0
      ? []
      : getRandomItemFromArray(getBlankNeighbors(...loc));
  }

  return {
    getState,
    getShip,
    getAvailableTargets,
    getQtySunk,
    allSunk,
    isValidPlacement,
    getValidShipPlacements,
    placeShip,
    isValidAttackLoc,
    receiveAttack,
    getBlankNeighbors,
    getRandomBlankNeighbor,
  };
}
