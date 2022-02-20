export function getArrayCoords(shipLength, x, y, isVertical) {
  const arrayCoords = [];

  for (let shipLocation = 0; shipLocation < shipLength; shipLocation += 1) {
    const newX = x + (isVertical === false ? shipLocation : 0);
    const newY = y + (isVertical === true ? shipLocation : 0);
    arrayCoords.push([newX, newY]);
  }
  return arrayCoords;
}

export function coordIsWithinBoard(x, y, size) {
  return x >= 0 && x < size && y >= 0 && y < size;
}

export function getLongestBlankX(x, y, board) {
  let numberBlanks = 0;
  while (board.isValidAttackLoc(x + numberBlanks, y)) {
    numberBlanks += 1;
  }
  return numberBlanks;
}

export function getLongestBlankY(x, y, board) {
  let numberBlanks = 0;
  while (board.isValidAttackLoc(x, y + numberBlanks)) {
    numberBlanks += 1;
  }
  return numberBlanks;
}

export function getLongestBlanks(board) {
  let longestBlanks = [];
  let currentLongest = 0;

  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      const lengthX = getLongestBlankX(x, y, board);
      const lengthY = getLongestBlankY(x, y, board);

      if (lengthX > lengthY && lengthX >= currentLongest) {
        if (lengthX > currentLongest) longestBlanks = [];
        longestBlanks.push([Math.floor(x + lengthX / 2), y]);
        currentLongest = lengthX;
      } else if (lengthY > lengthX && lengthY >= currentLongest) {
        if (lengthY > currentLongest) longestBlanks = [];
        longestBlanks.push([x, Math.floor(y + lengthY / 2)]);
        currentLongest = lengthY;
      } else if (lengthY === lengthX && lengthX >= currentLongest) {
        if (lengthX > currentLongest) longestBlanks = [];
        longestBlanks.push(
          [Math.floor(x + lengthX / 2), y],
          [x, Math.floor(y + lengthY / 2)]
        );
        currentLongest = lengthX;
      }
    }
  }

  return longestBlanks;
}
