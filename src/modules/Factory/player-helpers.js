import { getRandomItemFromArray } from '../Utilities/helper-functions';
import { getLongestBlanks } from './gameboard-helpers';

export function sendLongestBlankAttack(board) {
  const longestBlanks = getLongestBlanks(board);
  const [nextX, nextY] = getRandomItemFromArray(longestBlanks);
  const isValidAttack = board.receiveAttack(nextX, nextY);

  return [isValidAttack, [nextX, nextY]];
}

export function sendRandomAttack(board) {
  const [nextX, nextY] = getRandomItemFromArray(board.getAvailableTargets());
  const isValidAttack = board.receiveAttack(nextX, nextY);

  return [isValidAttack, [nextX, nextY]];
}

export function getNextLinearAttack([[x1, y1], [x2, y2]]) {
  const nextX = x1 === x2 ? x1 : x2 + Math.sign(x2 - x1);
  const nextY = y1 === y2 ? y1 : y2 + Math.sign(y2 - y1);

  return [nextX, nextY];
}
