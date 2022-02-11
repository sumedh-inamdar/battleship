import crosshair from "../images/Crosshairs_Red.svg";
import {
  userTurn,
  blockUserInput,
  nextShip,
  startGame,
  placeShips,
} from "./gameController";
import { renderBoard } from "./renderDOM";

function _loadCrosshair(event) {
  const targetIcon = new Image();
  targetIcon.src = crosshair;
  targetIcon.classList.add("crosshair");
  event.target.appendChild(targetIcon);
}

function _removeCrosshair(event) {
  event.target.removeChild(event.target.firstChild);
}

function _setupSquareUI_attack(squareElement, x, y) {
  const controller = new AbortController();

  squareElement.addEventListener("mouseenter", _loadCrosshair);
  squareElement.addEventListener("mouseleave", _removeCrosshair);

  squareElement.addEventListener(
    "click",
    () => {
      if (blockUserInput) return;

      squareElement.removeEventListener("mouseenter", _loadCrosshair);
      squareElement.removeEventListener("mouseleave", _removeCrosshair);
      squareElement.removeChild(squareElement.firstChild);
      userTurn(x, y);

      controller.abort(); // remove listener after successful attack
    },
    { signal: controller.signal }
  );
}

export function setupBoardUI_Attack() {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const squareElement = document.querySelector("#rightBoard" + j + i);
      _setupSquareUI_attack(squareElement, j, i);
    }
  }
}

export function removeShipPlacementEL() {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      let square = document.querySelector("#leftBoard" + j + i);
      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newSquare.id = "leftBoard" + j + i;
      square.replaceWith(newSquare);
    }
  }
}

function _toggleValidCells(arrayElements) {
  arrayElements.forEach((el) => el.classList.toggle("ship"));
}

export function addHoverEventListener(ship, board, validLocations, isVertical) {
  validLocations.forEach((loc) => {
    const [x, y] = _getXYfromID(loc);
    let arrayCoords = board.getArrayCoords(ship.getLength(), x, y, isVertical);

    let arrayCoordElements = arrayCoords.map((coord) =>
      document.querySelector("#leftBoard" + coord[0] + coord[1])
    );

    loc.addEventListener("mouseenter", () => {
      _toggleValidCells(arrayCoordElements);
    });
    loc.addEventListener("mouseleave", () => {
      _toggleValidCells(arrayCoordElements);
    });
  });
}

export function addClickEventListener(ship, board, validLocations, isVertical) {
  validLocations.forEach((loc) => {
    const [x, y] = _getXYfromID(loc);

    loc.addEventListener("click", () => {
      board.placeShip(ship, x, y, isVertical);
      removeShipPlacementEL();
      renderBoard(board, "leftBoard", false);
      ship = nextShip();
      if (ship !== undefined) {
        placeShips(ship, board);
      } else {
        startGame();
      }
    });
  });
}

function _getXYfromID(loc) {
  return [Number(loc.id[9]), Number(loc.id[10])];
}

export function getValidShipLocations(ship, board, isVertical) {
  let validLocations = [];

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (board.isValidPlacement(ship.getLength(), j, i, isVertical)) {
        validLocations.push(document.querySelector("#leftBoard" + j + i));
      }
    }
  }

  return validLocations;
}
