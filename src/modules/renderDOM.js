export function focusBoard(boardSide) {
  document.querySelectorAll('.leftBoard, .rightBoard').forEach(el => el.classList.remove('boardHighlight'));
  document.querySelector(`.${boardSide}`).classList.add('boardHighlight');
}

export function renderGrid(boardSide) {
  const board = document.querySelector(`.${boardSide} > .board`);
  _removeAllChildren(board);

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.id = boardSide + j + i;
      board.appendChild(square);
    }
  }
}

export function renderBoardTitle(title, boardSide) {
  const boardTitle = document.querySelector(`.${boardSide} > .boardTitle`);
  boardTitle.textContent = title;
}

export function renderBoardStatus(
  board,
  boardSide,
  status,
  style,
  clearStatus = true
) {
  const boardStatusContainer = document.querySelector(
    `.${boardSide} > .boardStatus`
  );

  if (clearStatus === true) _removeAllChildren(boardStatusContainer);

  const boardStatusDIV = document.createElement("div");
  boardStatusDIV.classList.add(style);
  boardStatusDIV.textContent = status;

  boardStatusContainer.appendChild(boardStatusDIV);
}

function _removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function renderBoard(board, boardSide, hideShips) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      renderBoardXY(board, j, i, boardSide, hideShips);
    }
  }
}

export function renderBoardXY(board, x, y, boardSide, hideShips) {
  const locationID = boardSide + x + y;
  if (hideShips === false) _renderShips(board, x, y, locationID);
  _renderState(board, x, y, locationID);
}

const _renderShips = (board, x, y, locationID) => {
  if (board.getShip(x, y) !== null) {
    const square = document.querySelector(`#${locationID}`);
    square.classList.add("ship");
  }
};

const _renderState = (board, x, y, locationID) => {
  const state = board.getState(x, y);
  if (state !== "blank") {
    const square = document.querySelector(`#${locationID}`);
    square.classList.add(state);
    square.textContent = state === "hit" ? "X" : "O";
  }
};
