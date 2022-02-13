export function generateRandInt(upperBound) {
    return Math.floor(Math.random() * upperBound);
}

export function generateRandBool() {
    return [true, false][generateRandInt(2)];
}

export function getRandomItemFromArray(array) {
    return array[generateRandInt(array.length)];
}

