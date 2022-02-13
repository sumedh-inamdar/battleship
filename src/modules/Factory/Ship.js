export default function Ship(length, name) {
  if (length <= 0 || length > 10)
    throw new Error("Length must be greater than 0 and less than 11");

  const _hitLocation = [];

  function hit(location) {
    _hitLocation.push(location);
  }

  function getName() { 
    return name;
  }
  
  function setName(newName) {
    name = newName;
  }

  function getLength() {
    return length;
  }

  function setLength(num) {
    length = num;
  }

  function isSunk() {
    return _hitLocation.length === length;
  }

  return { hit, getName, setName, getLength, setLength, isSunk };
}
