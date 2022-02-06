export default function Player(name) {
    let _name = name;

    const getName = () => name;

    const setName = (name) => _name = name;

    const sendAttack = (x, y, board) => {
        return board.receiveAttack(x, y);
    }

    const sendRandomAttack = (board) => {

        const targets = board.getAvailableTargets();
        const targetLocation = targets[Math.floor(Math.random() * targets.length)];

        return board.receiveAttack(targetLocation[0], targetLocation[1]);
    }

    return { getName, setName, sendAttack, sendRandomAttack }
}