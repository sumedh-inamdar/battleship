import { removeArrayfromNestedArray } from '../Utilities/helper-functions';
import { getNextLinearAttack, sendLongestBlankAttack } from './player-helpers';

export default function Player(name) {
  let _name = name;
  let _previousHits = [];

  function getName() {
    return _name;
  }

  function setName(newName) {
    _name = newName;
  }

  function _updatePreviousHits(x, y, board) {
    const targetShip = board.getShip(x, y);

    if (board.getState(x, y) === 'hit') _previousHits.push([x, y]);

    if (targetShip && targetShip.isSunk()) {
      _previousHits = removeArrayfromNestedArray(
        _previousHits,
        targetShip.getHitLocations()
      );
    }
  }

  function _attackPreviousHits(board) {
    for (let index = 0; index < _previousHits.length; index += 1) {
      const loc = _previousHits[index];

      if (board.getRandomBlankNeighbor(loc).length > 0) {
        const [nextX, nextY] = board.getRandomBlankNeighbor(loc);
        board.receiveAttack(nextX, nextY);

        if (board.getState(nextX, nextY) === 'hit') {
          _previousHits.push(loc, [nextX, nextY]);
          _previousHits.splice(index, 1);
        }
        return [nextX, nextY];
      }
    }
    return sendLongestBlankAttack(board)[1];
  }

  function sendSmartAttack(board) {
    let nextX;
    let nextY;

    if (_previousHits.length === 0) {
      [, [nextX, nextY]] = sendLongestBlankAttack(board);
    } else if (_previousHits.length === 1) {
      [nextX, nextY] = board.getRandomBlankNeighbor(_previousHits[0]);
      board.receiveAttack(nextX, nextY);
    } else {
      [nextX, nextY] = getNextLinearAttack(_previousHits.slice(-2));

      if (!board.isValidAttackLoc(nextX, nextY)) {
        [nextX, nextY] = getNextLinearAttack(
          _previousHits.slice(0, 2).reverse()
        );
      }

      if (!board.isValidAttackLoc(nextX, nextY))
        return _attackPreviousHits(board);

      board.receiveAttack(nextX, nextY);
    }
    _updatePreviousHits(nextX, nextY, board);
    return [nextX, nextY];
  }

  return {
    getName,
    setName,
    sendSmartAttack,
  };
}
