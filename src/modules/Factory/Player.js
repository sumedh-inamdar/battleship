export default function Player(name) {
  let _name = name;

  function getName() {
    return name;
  }

  function setName(name) {
    _name = name;
  }

  function sendAttack(x, y, board) {
    return board.receiveAttack(x, y);
  }

  function sendRandomAttack(board) {
    const targets = board.getAvailableTargets();
    const targetLocation = targets[Math.floor(Math.random() * targets.length)];

    return [
      board.receiveAttack(targetLocation[0], targetLocation[1]),
      targetLocation,
    ];
  }

  return { getName, setName, sendAttack, sendRandomAttack };
}
