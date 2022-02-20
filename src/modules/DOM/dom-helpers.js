export function getSquareElements(arrayLocations, player) {
  return arrayLocations.map((loc) =>
    document.querySelector(`#${player.boardClass}${loc[0]}${loc[1]}`)
  );
}

export function getXYfromElement(element) {
  return [Number(element.id.slice(-2, -1)), Number(element.id.slice(-1))];
}

export function toggleShip(arrayElements, event) {
  arrayElements.forEach((element) => {
    if (event.type === 'mouseenter') element.classList.add('ship');
    else element.classList.remove('ship');
  });
}

export function getAllSquares(boardClass) {
  return document.querySelectorAll(`.${boardClass} .square`);
}

export function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}
