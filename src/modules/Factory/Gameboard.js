export default function Gameboard() {
  const _size = 10;
  // [[col],[col],...]. [col] = [row 0, row 1, row 2]
  const _board = [...Array(_size)].map(() => Array(_size));
  const _ships = [];
  const _shipLocations = [];

  for (let i = 0; i < _size; i += 1) {
    for (let j = 0; j < _size; j += 1) {
      _board[i][j] = {
        ship: null, // null or ref to ship object
        state: 'blank', // ['blank', 'hit', 'miss']
      };
    }
  }
  const getSize = () => _size;
  const getState = (x, y) => _board[x][y].state;
  const getShip = (x, y) => _board[x][y].ship; // return reference of ship object
  const getAvailableTargets = () => {
      let targets = [];
      for (let i = 0; i < _size; i += 1) {
        for (let j = 0; j < _size; j += 1) {
          if (getState(i, j) === 'blank') targets.push([i, j]);
        }
      }

      return targets;
  }
  const getQtySunk = () => {
    return _ships.reduce((prev, curr) => prev + (curr.isSunk() ? 1 : 0) , 0);
  }

  const allSunk = () => {
    // returns true if all ships have been hit, false otherwise
    if (_ships.length === 0) return false;

    return _ships.every((ship) => ship.isSunk());
  };

  const _coordIsWithinBoard = (x, y) => (x >= 0 && x < _size) && (y >= 0 && y < _size);

  const getArrayCoords = (shipLength, x, y, isVertical) => {
    const arrayCoords = [];
    for (let i = 0; i < shipLength; i += 1) {
      const newX = x + (isVertical === false ? i : 0);
      const newY = y + (isVertical === true ? i : 0);
      arrayCoords.push([newX, newY]);
    }
    return arrayCoords; // [[0,0], [0,1], [0,2]]
  };

  const isValidPlacement = (shipLength, x, y, isVertical) => {
    const placementCoords = getArrayCoords(shipLength, x, y, isVertical);

    return placementCoords.every((xyCoords) => _coordIsWithinBoard(...xyCoords)
            && getShip(xyCoords[0], xyCoords[1]) === null);
  };

  const placeShip = (ship, x, y, isVertical) => {
    // return true for valid ship placement
    // return false if (x, y) is off board or conflicts with existing ship

    if (isValidPlacement(ship.getLength(), x, y, isVertical)) {
      getArrayCoords(ship.getLength(), x, y, isVertical).forEach((xyCoords) => {
        _board[xyCoords[0]][xyCoords[1]].ship = ship;
      });
      _ships.push(ship);
      _shipLocations.push([x, y]);
      return true;
    }
    return false;
  };

  const receiveAttack = (x, y) => {
    // return true for valid attack (hit or miss)
    // return false for invalid attack (invalid location or already hit / missed)

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
    getState, getShip, getSize, getArrayCoords, getAvailableTargets, getQtySunk, allSunk, placeShip, isValidPlacement, receiveAttack, _shipLocations
  };
}
