import {
  describe, beforeEach, test, expect,
} from '@jest/globals';
import Ship from '../Ship';

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = Ship(3);
  });

  test('length', () => {
    expect(ship.getLength()).toEqual(3);
  });

  test('error for invalid length', () => {
    expect(() => {
      Ship(0);
    }).toThrow();
  });

  test('valid hits and is not sunk', () => {
    ship.hit([0, 2]);
    ship.hit([0, 3]);
    expect(ship.isSunk()).toBe(false);
  });

  test('valid hits and is sunk', () => {
    ship.hit([2, 0]);
    ship.hit([3, 0]);
    ship.hit([4, 0]);
    expect(ship.isSunk()).toBe(true);
  });

});
