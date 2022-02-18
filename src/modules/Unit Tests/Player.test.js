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

    test('get longest blank')
    
    // need to export _prevAttackLocation from Player class to enable below tests
    
    // test('smart attack - happy path (adjacent attack off single hit)', () => {
    //     user.sendAttack(3, 3, opponentBoard);
    //     user._prevAttackLocation.push([3, 3]);
    //     expect(opponentBoard.getBlankNeighbors(3, 3)).toContainEqual(user.sendSmartAttack(opponentBoard));
    // });

    // test('smart attack - happy path (continue attacking in direction of multiple hits)', () => {
    //     user.sendAttack(3, 3, opponentBoard);
    //     user._prevAttackLocation.push([3, 3]);

    //     user.sendAttack(3, 4, opponentBoard);
    //     user._prevAttackLocation.push([3, 4]);

    //     expect(user.sendSmartAttack(opponentBoard)).toEqual([3, 5]);
    // });

    // test('smart attack - reverse upon miss when ship is not sunk', () => {
    //     user.sendAttack(3, 4, opponentBoard);
    //     user._prevAttackLocation.push([3, 4]);

    //     user.sendAttack(3, 3, opponentBoard);
    //     user._prevAttackLocation.push([3, 3]);

    //     expect(user.sendSmartAttack(opponentBoard)).toEqual([3, 2]);
    //     expect(user.sendSmartAttack(opponentBoard)).toEqual([3, 5]);

    // });

    // test('smart attack - reverse upon board edg)', () => {
    //     ship = Ship(3);
    //     opponentBoard.placeShip(ship, 0, 0, true);

    //     user.sendAttack(0, 1, opponentBoard);
    //     user._prevAttackLocation.push([0, 1]);

    //     user.sendAttack(0, 0, opponentBoard);
    //     user._prevAttackLocation.push([0, 0]);

    //     expect(user.sendSmartAttack(opponentBoard)).toEqual([0, 2]);
    // });

    // test('smart attack - two adjacent ships', () => {
    //     let ship2 = Ship(3);
    //     opponentBoard.placeShip(ship2, 2, 1, true);

    //     user.sendAttack(2, 3, opponentBoard);
    //     user._prevAttackLocation.push([2, 3]);

    //     user.sendAttack(3, 3, opponentBoard);
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

    //     user.sendAttack(2, 3, opponentBoard);
    //     user._prevAttackLocation.push([2, 3]);

    //     user.sendAttack(3, 3, opponentBoard);
    //     user._prevAttackLocation.push([3, 3]);

    //     expect(user.sendSmartAttack(opponentBoard)).toEqual([4, 3]);
    //     expect(user.sendSmartAttack(opponentBoard)).toEqual([1, 3]);
    //     expect(user.sendSmartAttack(opponentBoard)).toEqual([0, 3]);

    //     expect(opponentBoard.getBlankNeighbors(2, 3)).toContainEqual(user.sendSmartAttack(opponentBoard));
    // });


})


  