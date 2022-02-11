import Gameboard from "./Factory/Gameboard";
import Player from "./Factory/Player";
import Ship from "./Factory/Ship";
import { _shipTemplate } from '../modules/Constants';
import {
  focusBoard,
  renderBoardStatus,
  renderBoard,
  renderBoardXY,
  renderBoardTitle,
  renderGrid,
} from "./renderDOM";
import {
  setupBoardUI_Attack,
  getValidShipLocations,
  addClickEventListener,
  addHoverEventListener,
  removeShipPlacementEL,
} from "./userInterface";

let _user, _comp, _userBoard, _compBoard, _isVertical, _shipIndex, _shipsUser, _shipsComp;

export let blockUserInput;

function generateShips(ships) {
  const shipArray = [];
  ships.forEach(ship => {
    shipArray.push(Ship(ship.length, ship.name));
  });
  return shipArray;
}

export function gameInit() {
  _user = Player("You");
  _comp = Player("Opponent");

  _userBoard = Gameboard();
  _compBoard = Gameboard();

  renderGrid("leftBoard");
  renderGrid("rightBoard");

  renderBoardTitle(_user.getName(), "leftBoard");
  renderBoardTitle(_comp.getName(), "rightBoard");

  renderBoardStatus(_userBoard, "leftBoard", "", "bold");
  renderBoardStatus(_compBoard, "rightBoard", "", "bold");

  _shipsUser = generateShips(_shipTemplate);
  _shipsComp = generateShips(_shipTemplate);

  blockUserInput = false;

  boardSetup(_userBoard, _shipsUser, false);
  boardSetup(_compBoard, _shipsComp, true);

  console.log(_compBoard._shipLocations);
}

export function boardSetup(board, ships, isRandom) {
  if (isRandom === true) return placeShipsRandom(board, ships);

  _isVertical = true;
  _shipIndex = 0;

  focusBoard("leftBoard");
  document.addEventListener("keydown", handleRotate);
  placeShips(ships[_shipIndex], board);
}

export function nextShip() {
  return _shipsUser[(_shipIndex += 1)];
}

function handleRotate(event) {
  if (event.code === "KeyR") {
    _isVertical = !_isVertical;
    removeShipPlacementEL();
    renderBoard(_userBoard, "leftBoard", false);
    placeShips(_shipsUser[_shipIndex], _userBoard);
  }
}

function placeShipsRandom(board, ships) {
  ships.forEach((ship) => {
    let gen_x, gen_y, gen_vert;

    do {
      gen_x = Math.floor(Math.random() * 10);
      gen_y = Math.floor(Math.random() * 10);
      gen_vert = [true, false][Math.floor(Math.random() * 2)];
    } while (!board.isValidPlacement(ship.getLength(), gen_x, gen_y, gen_vert));

    board.placeShip(ship, gen_x, gen_y, gen_vert);
  });
}

export function placeShips(ship, board) {
  let validLocations = getValidShipLocations(ship, board, _isVertical); // array of Elements
  addHoverEventListener(ship, board, validLocations, _isVertical);
  addClickEventListener(ship, board, validLocations, _isVertical);

  renderBoardStatus(board, "leftBoard", `Place ${ship.getName()}`, "bold");
  renderBoardStatus(
    board,
    "leftBoard",
    `(Press R to rotate ship)`,
    "regular",
    false
  );
}

export function startGame() {
  setupBoardUI_Attack();

  renderBoard(_userBoard, "leftBoard", false);
  renderBoardStatus(
    _compBoard,
    "rightBoard",
    `${_compBoard.getQtySunk()}/5 ships sunk`,
    "bold"
  );
  renderBoardStatus(
    _compBoard,
    "rightBoard",
    `Place your attack!`,
    "regular",
    false
  );

  renderBoard(_compBoard, "rightBoard", true);
  renderBoardStatus(
    _userBoard,
    "leftBoard",
    `${_userBoard.getQtySunk()}/5 ships sunk`,
    "bold"
  );

  focusBoard('rightBoard');
}

export function userTurn(x, y) {
  blockUserInput = true;
  if (_user.sendAttack(x, y, _compBoard) === false)
    throw new Error("Invalid attack location");
  renderBoardXY(_compBoard, x, y, "rightBoard", false);
  console.log("computer board ships sunk: ", _compBoard.getQtySunk());
  console.log("user board ships sunk: ", _userBoard.getQtySunk());
  renderBoardStatus(
    _compBoard,
    "rightBoard",
    `${_compBoard.getQtySunk()}/5 ships sunk`,
    "bold"
  );
  if (_compBoard.allSunk()) return _endGame("you");
  focusBoard('leftBoard');
  renderBoardStatus(_compBoard, "leftBoard", `Thinking...`, "bold");
  setTimeout(_computerTurn, 0);
}

function _computerTurn() {
  const [isValidAttack, target] = _comp.sendRandomAttack(_userBoard);
  if (isValidAttack === false) throw new Error("Invalid attack location");
  renderBoardXY(_userBoard, target[0], target[1], "leftBoard", false);
  renderBoardStatus(
    _userBoard,
    "leftBoard",
    `${_userBoard.getQtySunk()}/5 ships sunk`,
    "bold"
  );
  if (_userBoard.allSunk()) return _endGame("computer");
  blockUserInput = false;
  focusBoard('rightBoard');
  renderBoardStatus(
    _compBoard,
    "rightBoard",
    `Place your attack!`,
    "regular",
    false
  );
}

function _endGame(winner) {
  const endGameDIV = document.querySelector("#endGameStatus");

  if (winner === "you") {
    endGameDIV.textContent =
      "You Win! Good job sinking all your opponents ships 😀";
  } else {
    endGameDIV.textContent = "All your ships were sunk. You lost 🙁";
  }

  document.querySelector('#restartGame').addEventListener('click', _restartGame);
  document.querySelector("#endGameContainer").classList.remove('hidden');
}

function _restartGame() {
  document.querySelector('#endGameContainer').classList.add('hidden');
  gameInit();
  
}