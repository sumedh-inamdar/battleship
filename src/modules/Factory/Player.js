import { getNextAttackLoc, getRandomItemFromArray, arrayEquals, removeArrfromNestedArr } from "../Utilities/helper_func";

export default function Player(name) {
  let _name = name;
  let _prevAttackLocation = [];

  function getName() {
    return _name;
  }

  function setName(name) {
    _name = name;
  }

  function sendAttack(x, y, board) {
    return board.receiveAttack(x, y);
  }

  function getLongestBlank_X(x, y, board) {
    let numBlanks = 0;
    while (board.isValidAttackLoc(x + numBlanks, y)) {
      numBlanks++;
    }
    return numBlanks;
  }

  function getLongestBlank_Y(x, y, board) {
    let numBlanks = 0;
    while (board.isValidAttackLoc(x, y + numBlanks)) {
      numBlanks++;
    }
    return numBlanks;
  }

  function getLongestBlanks(board) {
    let longestBlanks = [];
    let currLongest = 0;

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        
        const lenX = getLongestBlank_X(x, y, board);
        const lenY = getLongestBlank_Y(x, y, board);

        if (lenX > lenY && lenX >= currLongest) {
          if (lenX > currLongest) longestBlanks = [];
          longestBlanks.push([Math.floor(x + lenX/2), y]);
          currLongest = lenX;
        
        } else if (lenY > lenX && lenY >= currLongest) {
          if (lenY > currLongest) longestBlanks = [];
          longestBlanks.push([x, Math.floor(y + lenY/2)]);
          currLongest = lenY;
        
        } else if (lenY === lenX && lenX >= currLongest) {
          if (lenX > currLongest) longestBlanks = [];
          longestBlanks.push([Math.floor(x + lenX/2), y]);
          longestBlanks.push([x, Math.floor(y + lenY/2)]);
          currLongest = lenX;
        }
      }
    }

    return longestBlanks;
  }

  function sendAttack_BinarySearch(board) {
    const longestBlanks = getLongestBlanks(board);
    const [nextX, nextY] = getRandomItemFromArray(longestBlanks);
    const isValidAttack = sendAttack(nextX, nextY, board);
    
    return [isValidAttack, [nextX, nextY]];
  }

  function sendRandomAttack(board) {
    const targetLocation = getRandomItemFromArray(board.getAvailableTargets());
    const isValidAttack = sendAttack(targetLocation[0], targetLocation[1], board);

    return [isValidAttack, targetLocation];
  }

  function _updatePrevAttackArr(x, y, board) {
    const currShip = board.getShip(x, y);

    if (board.getState(x, y) === 'hit') _prevAttackLocation.push([x, y]); 

    if (currShip && currShip.isSunk()) {
      _prevAttackLocation = removeArrfromNestedArr(_prevAttackLocation, currShip.getHitLocations());
    }
  }

  function _getNextAttackLoc([[x1, y1], [x2, y2]]) {
    const nextX = x1 === x2 ? x1 : x2 + Math.sign(x2 - x1);
    const nextY = y1 === y2 ? y1 : y2 + Math.sign(y2 - y1);

    return [nextX, nextY];
  }

  function _attackNextValidLoc(board) {
    for (let i = 0; i < _prevAttackLocation.length; i++) {

      const loc = _prevAttackLocation[i];

      if (board.getRandomBlankNeighbor(loc).length > 0) {
        const [nextX, nextY] = board.getRandomBlankNeighbor(loc);
        sendAttack(nextX, nextY, board);

        if (board.getState(nextX, nextY) === 'hit') {
          _prevAttackLocation.push(loc);
          _prevAttackLocation.push([nextX, nextY]);
          _prevAttackLocation.splice(i, 1);
        }
        return [nextX, nextY];
      }
    }
  }

  function sendSmartAttack(board) {

    let nextX; let nextY;
 
    if (_prevAttackLocation.length === 0) {
      [,[nextX, nextY]] = sendAttack_BinarySearch(board);
      
    } else if (_prevAttackLocation.length === 1) {
      [nextX, nextY] = board.getRandomBlankNeighbor(_prevAttackLocation[0]);
      sendAttack(nextX, nextY, board);
      
    } else {
      [nextX, nextY] = _getNextAttackLoc(_prevAttackLocation.slice(-2));

      if (!board.isValidAttackLoc(nextX, nextY)) {
        [nextX, nextY] = _getNextAttackLoc(_prevAttackLocation.slice(0, 2).reverse());
      }

      if (!board.isValidAttackLoc(nextX, nextY)) return _attackNextValidLoc(board);

      sendAttack(nextX, nextY, board);
    }
    _updatePrevAttackArr(nextX, nextY, board);
    return [nextX, nextY];
  }

  return { getName, setName, sendRandomAttack, sendAttack, getLongestBlank_X, getLongestBlank_Y, sendSmartAttack };
}
