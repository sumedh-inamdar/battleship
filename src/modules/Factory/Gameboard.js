export default function Gameboard() {
  const _size = 10;
  const _board = [...Array(_size)].map(() => Array(_size));
  const _ships = [];

  for (let i = 0; i < _size; i += 1) {
    for (let j = 0; j < _size; j += 1) {
      _board[i][j] = {
        ship: null, 
        state: 'blank',
      };
    }
  }

  function _coordIsWithinBoard(x, y) {
    return (x >= 0 && x < _size) && (y >= 0 && y < _size);
  } 

  function getState(x, y) {
    return _board[x][y].state;
  }

  function getShip(x, y) {
    return _board[x][y].ship;
  }

  function getAvailableTargets() {
      let targets = [];
      for (let i = 0; i < _size; i += 1) {
        for (let j = 0; j < _size; j += 1) {
          if (getState(i, j) === 'blank') targets.push([i, j]);
        }
      }
      return targets;
  }

  function getQtySunk() {
    return _ships.reduce((prev, curr) => prev + (curr.isSunk() ? 1 : 0) , 0);
  }

  function allSunk() {
    if (_ships.length === 0) return false;

    return _ships.every((ship) => ship.isSunk());
  }

  function getArrayCoords (shipLength, x, y, isVertical) {
    const arrayCoords = [];
    for (let i = 0; i < shipLength; i += 1) {
      const newX = x + (isVertical === false ? i : 0);
      const newY = y + (isVertical === true ? i : 0);
      arrayCoords.push([newX, newY]);
    }
    return arrayCoords; 
  }

  function isValidPlacement(shipLength, x, y, isVertical) {
    const placementCoords = getArrayCoords(shipLength, x, y, isVertical);

    return placementCoords.every((xyCoords) => _coordIsWithinBoard(...xyCoords)
            && getShip(xyCoords[0], xyCoords[1]) === null);
  }

  function getValidShipPlacements(ship, board, isVertical) {
    let validLocations = [];

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (isValidPlacement(ship.getLength(), j, i, isVertical)) {
          validLocations.push([j, i]);
        }
      }
    }

    return validLocations;
  }

  function placeShip(ship, x, y, isVertical) {
    if (isValidPlacement(ship.getLength(), x, y, isVertical)) {
      getArrayCoords(ship.getLength(), x, y, isVertical).forEach((xyCoords) => 
        _board[xyCoords[0]][xyCoords[1]].ship = ship);
      _ships.push(ship);
  
      return true;
    }
    return false;
  };

  function receiveAttack(x, y) {
    if (!_coordIsWithinBoard(x, y)) return false;
    if (_board[x][y].state !== 'blank') return false;

    if (getShip(x, y) !== null) {
      getShip(x, y).hit([x, y]);
      _board[x][y].state = 'hit';
    } else {
      _board[x][y].state = 'miss';
    }
 
    return true;
  };

  return {
    getState, getShip, getAvailableTargets, getQtySunk, allSunk, getArrayCoords, isValidPlacement, getValidShipPlacements, placeShip, receiveAttack
  };
}
