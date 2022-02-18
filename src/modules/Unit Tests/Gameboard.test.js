import {
  describe, beforeEach, test, expect,
} from '@jest/globals';
import Gameboard from '../Factory/Gameboard';
import Ship from '../Factory/Ship';

describe('Gameboard', () => {
  let board;

  beforeEach(() => {
    board = Gameboard();
  });

  test('board successfully created', () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        expect(board.getState(i, j)).toBe('blank');
        expect(board.getShip(i, j)).toBe(null);
      }
    }
  });

  // _coordIsWithinBoard set to private function
  // test('coord is within board', () => {
  //     expect(board._coordIsWithinBoard(0, 0)).toBe(true);
  //     expect(board._coordIsWithinBoard(9, 9)).toBe(true);
  //     expect(board._coordIsWithinBoard(10, 9)).toBe(false);
  //     expect(board._coordIsWithinBoard(-1, 0)).toBe(false);
  //     expect(board._coordIsWithinBoard(-1, 10)).toBe(false);
  // })

  // _getArrayCoords set to private function
  // test('array coords', () => {
  //     expect(board._getArrayCoords(2, 2, 0, true)).toEqual([[2, 0], [2, 1]]);
  //     expect(board._getArrayCoords(2, 2, 0, false)).toEqual([[2, 0], [3, 0]]);
  //     expect(board._getArrayCoords(2, 9, 8, true)).toEqual([[9, 8], [9, 9]]);
  //     expect(board._getArrayCoords(2, 8, 9, false)).toEqual([[8, 9], [9, 9]]);
  //     expect(board._getArrayCoords(2, 0, 9, false)).toEqual([[0, 9], [1, 9]]);
  // });

  test('valid placement', () => {
    expect(board.isValidPlacement(5, 0, 0, true)).toBe(true);
    expect(board.isValidPlacement(4, 2, 0, false)).toBe(true);
    expect(board.isValidPlacement(3, 5, 5, true)).toBe(true);
    expect(board.isValidPlacement(3, -5, 5, true)).toBe(false);
    expect(board.isValidPlacement(3, 0, 9, true)).toBe(false);
  });

  test('place multiple ships in valid locations', () => {
    expect(board.placeShip(Ship(5), 0, 0, true)).toBe(true);
    expect(board.placeShip(Ship(4), 2, 0, false)).toBe(true);
    expect(board.placeShip(Ship(3), 5, 5, true)).toBe(true);
    expect(board.placeShip(Ship(5), 5, 9, false)).toBe(true);
  });

  test('reject placing ship off board', () => {
    expect(board.placeShip(Ship(5), 0, 6, true)).toBe(false);
    expect(board.placeShip(Ship(5), 6, 0, false)).toBe(false);
  });

  test('reject conflicting ship placement', () => {
    expect(board.placeShip(Ship(5), 0, 0, true)).toBe(true);
    expect(board.placeShip(Ship(5), 0, 4, true)).toBe(false);
    expect(board.placeShip(Ship(3), 3, 0, false)).toBe(true);
    expect(board.placeShip(Ship(2), 5, 0, true)).toBe(false);
  });

  test('ship object reference is the same', () => {
    const ship = Ship(5);
    board.placeShip(ship, 0, 0, true);
    expect(board.getShip(0, 0) === board.getShip(0, 4)).toBe(true);
    ship.setLength(6);
    expect(board.getShip(0, 0).getLength()).toBe(6);
  });

  test('can change ship object from board.getShip', () => {
    const ship = Ship(5);
    board.placeShip(ship, 0, 0, true);
    board.getShip(0, 0).setLength(6);
    expect(ship.getLength()).toBe(6);
  });

  test('attack valid location - hit', () => {
    const ship = Ship(3);
    board.placeShip(ship, 0, 0, true);

    expect(board.receiveAttack(0, 0)).toBe(true);
    expect(board.getState(0, 0)).toBe('hit');

    expect(board.receiveAttack(0, 1)).toBe(true);
    expect(board.getState(0, 1)).toBe('hit');

    expect(board.getState(0, 2)).toBe('blank');
    expect(board.getState(1, 1)).toBe('blank');
  });

  test('attack valid location - miss', () => {
    const ship = Ship(5);
    board.placeShip(ship, 5, 9, false);

    expect(board.receiveAttack(0, 0)).toBe(true);
    expect(board.getState(0, 0)).toBe('miss');

    expect(board.receiveAttack(0, 1)).toBe(true);
    expect(board.getState(0, 1)).toBe('miss');

    expect(board.getState(0, 2)).toBe('blank');
    expect(board.getState(1, 1)).toBe('blank');
  });

  test('reject attacking invalid location', () => {
    const ship = Ship(5);
    board.placeShip(ship, 5, 9, false);

    expect(board.receiveAttack(-5, 0)).toBe(false);
  });

  test('reject attacking previously hit / missed location', () => {
    const ship = Ship(5);
    board.placeShip(ship, 5, 9, false);

    expect(board.receiveAttack(5, 9)).toBe(true);
    expect(board.receiveAttack(5, 9)).toBe(false);
    expect(board.getState(5, 9)).toBe('hit');

    expect(board.receiveAttack(5, 8)).toBe(true);
    expect(board.receiveAttack(5, 8)).toBe(false);
    expect(board.getState(5, 8)).toBe('miss');
  });

  test('all ships sunk returns true', () => {
    const ship1 = Ship(5);
    board.placeShip(ship1, 5, 9, false);

    const ship2 = Ship(4);
    board.placeShip(ship2, 0, 0, true);

    const ship3 = Ship(2);
    board.placeShip(ship3, 1, 0, true);

    expect(board.getQtySunk()).toBe(0);

    expect(board.receiveAttack(5, 9)).toBe(true);
    expect(board.receiveAttack(6, 9)).toBe(true);
    expect(board.receiveAttack(7, 9)).toBe(true);
    expect(board.receiveAttack(8, 9)).toBe(true);
    expect(board.receiveAttack(9, 9)).toBe(true);
    expect(board.getShip(5, 9).isSunk()).toBe(true);

    expect(board.getQtySunk()).toBe(1);

    expect(board.receiveAttack(0, 0)).toBe(true);
    expect(board.receiveAttack(0, 1)).toBe(true);
    expect(board.receiveAttack(0, 2)).toBe(true);
    expect(board.getQtySunk()).toBe(1);
    expect(board.receiveAttack(0, 3)).toBe(true);
    expect(board.getShip(0, 3).isSunk()).toBe(true);

    expect(board.getQtySunk()).toBe(2);

    expect(board.receiveAttack(1, 0)).toBe(true);
    expect(board.getQtySunk()).toBe(2);
    expect(board.receiveAttack(1, 1)).toBe(true);
    expect(board.getQtySunk()).toBe(3);

    expect(board.receiveAttack(3, 0)).toBe(true);
    expect(board.getShip(1, 0).isSunk()).toBe(true);

    expect(board.allSunk()).toBe(true);
  });

  test('reject all ships sunk', () => {
    expect(board.allSunk()).toBe(false);

    const ship1 = Ship(5);
    board.placeShip(ship1, 5, 9, false);

    expect(board.allSunk()).toBe(false);

    expect(board.receiveAttack(5, 9)).toBe(true);
    expect(board.receiveAttack(6, 9)).toBe(true);
    expect(board.receiveAttack(7, 9)).toBe(true);
    expect(board.receiveAttack(8, 9)).toBe(true);

    expect(board.getShip(5, 9).isSunk()).toBe(false);
    expect(board.allSunk()).toBe(false);
    expect(board.getQtySunk()).toBe(0);
  });

  test('returns all blank neighbors', () => {
    const ship1 = Ship(5);
    const ship2 = Ship(4);

    board.placeShip(ship1, 5, 5, true);
    board.placeShip(ship2, 0, 6, true);

    expect(board.getBlankNeighbors(5, 5)).toEqual([[4, 5], [6, 5], [5, 4], [5, 6]]);
    expect(board.getBlankNeighbors(5, 9)).toEqual([[4, 9], [6, 9], [5, 8]]);
    expect(board.getBlankNeighbors(0, 9)).toEqual([[1, 9], [0, 8]]);

    board.receiveAttack(1, 9);
    expect(board.getBlankNeighbors(0, 9)).toEqual([[0, 8]]);

  })
});
