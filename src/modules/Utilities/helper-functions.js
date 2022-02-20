export function generateRandInt(upperBound) {
  return Math.floor(Math.random() * upperBound);
}

export function generateRandBool() {
  return [true, false][generateRandInt(2)];
}

export function getRandomItemFromArray(array) {
  return array[generateRandInt(array.length)];
}

export function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((value, index) => value === b[index])
  );
}

export function removeArrayfromNestedArray(nested, toRemove) {
  return nested.filter((item1) =>
    toRemove.every((item2) => !arrayEquals(item1, item2))
  );
}

export function rmUpCaseWhtSpace(string) {
  return string.toLowerCase().split(' ').join('');
}
