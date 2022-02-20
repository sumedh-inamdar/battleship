import { describe, beforeEach, test, expect } from '@jest/globals';
import Gameboard from '../Factory/gameboard';
import {
  getLongestBlankX,
  getLongestBlankY,
} from '../Factory/gameboard-helpers';
import Player from '../Factory/player';
import { sendRandomAttack } from '../Factory/player-helpers';
import Ship from '../Factory/ship';

describe('Player', () => {
  let user;
  let opponentBoard;
  let ship;

  beforeEach(() => {
    user = Player('user');
    opponentBoard = Gameboard();
    ship = Ship(3);

    opponentBoard.placeShip(ship, 3, 3, true);
  });

  test('player init', () => {
    expect(user.getName()).toBe('user');
  });

  test('random attack', () => {
    for (let iteration = 0; iteration < 100; iteration += 1) {
      expect(sendRandomAttack(opponentBoard)[0]).toBe(true);
    }
    expect(opponentBoard.allSunk()).toBe(true);
    expect(opponentBoard.getAvailableTargets()).toEqual([]);
  });

  test('get longest blank - blank board', () => {
    expect(getLongestBlankX(0, 0, opponentBoard)).toBe(10);
    expect(getLongestBlankX(0, 9, opponentBoard)).toBe(10);
    expect(getLongestBlankX(9, 0, opponentBoard)).toBe(1);
    expect(getLongestBlankX(5, 5, opponentBoard)).toBe(5);

    expect(getLongestBlankY(0, 0, opponentBoard)).toBe(10);
    expect(getLongestBlankY(0, 9, opponentBoard)).toBe(1);
    expect(getLongestBlankY(9, 0, opponentBoard)).toBe(10);
    expect(getLongestBlankY(5, 5, opponentBoard)).toBe(5);
  });

  test('get longest blank - non-blank board', () => {
    opponentBoard.receiveAttack(5, 0);
    expect(getLongestBlankX(0, 0, opponentBoard)).toBe(5);
    expect(getLongestBlankX(3, 0, opponentBoard)).toBe(2);
    expect(getLongestBlankX(5, 0, opponentBoard)).toBe(0);

    opponentBoard.receiveAttack(0, 5);
    expect(getLongestBlankY(0, 0, opponentBoard)).toBe(5);
    expect(getLongestBlankY(0, 3, opponentBoard)).toBe(2);
    expect(getLongestBlankY(0, 5, opponentBoard)).toBe(0);
  });

  // need to export _prevAttackLocation from Player class to enable below tests

  // test('smart attack - happy path (adjacent attack off single hit)', () => {
  //     sendAttack(3, 3, opponentBoard);
  //     user._prevAttackLocation.push([3, 3]);
  //     expect(opponentBoard.getBlankNeighbors(3, 3)).toContainEqual(user.sendSmartAttack(opponentBoard));
  // });

  // test('smart attack - happy path (continue attacking in direction of multiple hits)', () => {
  //     sendAttack(3, 3, opponentBoard);
  //     user._prevAttackLocation.push([3, 3]);

  //     sendAttack(3, 4, opponentBoard);
  //     user._prevAttackLocation.push([3, 4]);

  //     expect(user.sendSmartAttack(opponentBoard)).toEqual([3, 5]);
  // });

  // test('smart attack - reverse upon miss when ship is not sunk', () => {
  //     sendAttack(3, 4, opponentBoard);
  //     user._prevAttackLocation.push([3, 4]);

  //     sendAttack(3, 3, opponentBoard);
  //     user._prevAttackLocation.push([3, 3]);

  //     expect(user.sendSmartAttack(opponentBoard)).toEqual([3, 2]);
  //     expect(user.sendSmartAttack(opponentBoard)).toEqual([3, 5]);

  // });

  // test('smart attack - reverse upon board edg)', () => {
  //     ship = Ship(3);
  //     opponentBoard.placeShip(ship, 0, 0, true);

  //     sendAttack(0, 1, opponentBoard);
  //     user._prevAttackLocation.push([0, 1]);

  //     sendAttack(0, 0, opponentBoard);
  //     user._prevAttackLocation.push([0, 0]);

  //     expect(user.sendSmartAttack(opponentBoard)).toEqual([0, 2]);
  // });

  // test('smart attack - two adjacent ships', () => {
  //     let ship2 = Ship(3);
  //     opponentBoard.placeShip(ship2, 2, 1, true);

  //     sendAttack(2, 3, opponentBoard);
  //     user._prevAttackLocation.push([2, 3]);

  //     sendAttack(3, 3, opponentBoard);
  //     user._prevAttackLocation.push([3, 3]);

  //     expect(user.sendSmartAttack(opponentBoard)).toEqual([4, 3]);
  //     expect(user.sendSmartAttack(opponentBoard)).toEqual([1, 3]);

  //     expect(opponentBoard.getBlankNeighbors(2, 3)).toContainEqual(user.sendSmartAttack(opponentBoard));
  // });

  // test('smart attack - three adjacent ships', () => {
  //     let ship2 = Ship(3)
  //     opponentBoard.placeShip(ship2, 2, 1, true);

  //     let ship3 = Ship(4)
  //     opponentBoard.placeShip(ship3, 1, 2, true);

  //     sendAttack(2, 3, opponentBoard);
  //     user._prevAttackLocation.push([2, 3]);

  //     sendAttack(3, 3, opponentBoard);
  //     user._prevAttackLocation.push([3, 3]);

  //     expect(user.sendSmartAttack(opponentBoard)).toEqual([4, 3]);
  //     expect(user.sendSmartAttack(opponentBoard)).toEqual([1, 3]);
  //     expect(user.sendSmartAttack(opponentBoard)).toEqual([0, 3]);

  //     expect(opponentBoard.getBlankNeighbors(2, 3)).toContainEqual(user.sendSmartAttack(opponentBoard));
  // });
});
