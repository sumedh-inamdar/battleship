import {
    describe, beforeEach, test, expect,
  } from '@jest/globals';
import Gameboard from '../Factory/Gameboard';
import Player from '../Factory/Player';
import Ship from '../Factory/Ship';

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

    test('attack', () => {
        expect(user.sendAttack(3, 3, opponentBoard)).toBe(true);
        expect(user.sendAttack(2, 3, opponentBoard)).toBe(true);
        expect(user.sendAttack(2, 3, opponentBoard)).toBe(false);
        expect(opponentBoard.getState(3, 3)).toBe('hit');
        expect(opponentBoard.getState(2, 3)).toBe('miss');
    });

    test('random attack', () => {
        for (let i = 0; i < 100; i += 1) {
            expect(user.sendRandomAttack(opponentBoard)[0]).toBe(true);
        }
        expect(opponentBoard.allSunk()).toBe(true);
        expect(opponentBoard.getAvailableTargets()).toEqual([]);
    });

    test('sink all ships', () => {
        expect(user.sendAttack(3, 3, opponentBoard)).toBe(true);
        expect(user.sendAttack(3, 4, opponentBoard)).toBe(true);
        expect(user.sendAttack(3, 5, opponentBoard)).toBe(true);
        expect(ship.isSunk()).toBe(true);
        expect(opponentBoard.getQtySunk()).toBe(1);
    });

})


  