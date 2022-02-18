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

  }

  function getLongestBlanks(board) {
    let longestBlanks = [];
    let currLongest = 0;
    let currLength = 0;
    let start, end;

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (board.getState(x, y) === 'blank') {
          
        }
      }
    }
  }

  function sendAttack_BinarySearch(board) {
    // find longest segment of 'blank' spaces and add to array
    // discard any segments shorter than longest
    let longestBlanks = getLongestBlanks(board); //array of midpoints
    
    let [nextX, nextY] = getRandomItemFromArray(longestBlanks);
    const isValidAttack = sendAttack(nextX, nextY, board);
    return [isValidAttack, [nextX, nextY]];
    
  }

  function sendRandomAttack(board) {
    const targetLocation = getRandomItemFromArray(board.getAvailableTargets());
    const isValidAttack = sendAttack(targetLocation[0], targetLocation[1], board);

    return [isValidAttack, targetLocation];
  }

  function _updatePrevAttackArr(x, y, board) {
    let currShip = board.getShip(x, y);

    if (board.getState(x, y) === 'hit') _prevAttackLocation.push([x, y]); 

    if (currShip && currShip.isSunk()) {
      _prevAttackLocation = removeArrfromNestedArr(_prevAttackLocation, currShip.getHitLocations());
    }
  }

  function _getNextAttackLoc([[x1, y1], [x2, y2]]) {
    let nextX = x1 === x2 ? x1 : x2 + Math.sign(x2 - x1);
    let nextY = y1 === y2 ? y1 : y2 + Math.sign(y2 - y1);

    return [nextX, nextY];
  }

  function _attackNextValidLoc(board) {
    for (let i = 0; i < _prevAttackLocation.length; i++) {

      let loc = _prevAttackLocation[i];

      if (board.getRandomBlankNeighbor(loc).length > 0) {
        let [nextX, nextY] = board.getRandomBlankNeighbor(loc);
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

    let nextX, nextY;
 
    if (_prevAttackLocation.length === 0) {
      [,[nextX, nextY]] = sendRandomAttack(board);
      
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

  return { getName, setName, sendRandomAttack, sendAttack, sendSmartAttack };
}
