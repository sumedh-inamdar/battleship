import {
    describe, beforeEach, test, expect,
  } from '@jest/globals';
import Gameboard from '../Gameboard';
import Player from '../Player';
import Ship from '../Ship';

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
            expect(user.sendRandomAttack(opponentBoard)).toBe(true);
        }
        expect(opponentBoard.allSunk()).toBe(true);
        expect(opponentBoard.getAvailableTargets()).toEqual([]);
        
    })

})


  