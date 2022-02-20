export default function Ship(length, name) {
  let _name = name;
  let _length = length;
  if (length <= 0 || length > 10)
    throw new Error('Length must be greater than 0 and less than 11');

  const _hitLocation = [];

  function hit(location) {
    _hitLocation.push(location);
  }

  function getName() {
    return _name;
  }

  function getHitLocations() {
    return _hitLocation;
  }

  function setName(newName) {
    _name = newName;
  }

  function getLength() {
    return _length;
  }

  function setLength(number) {
    _length = number;
  }

  function isSunk() {
    return _hitLocation.length === length;
  }

  return {
    hit,
    getName,
    setName,
    getLength,
    setLength,
    isSunk,
    getHitLocations,
  };
}
