export default function Ship(length) {
  if (length <= 0 || length > 10) throw new Error('Length must be greater than 0');

  const hitLocation = []; // contains [x, y] locations

  // assumed valid hit location
  const hit = (location) => {
    if (hitLocation.includes(location)) throw new Error('Location already hit'); //can delete
    hitLocation.push(location);
  };

  const getLength = () => length;

  const setLength = (num) => length = num;

  const isSunk = () => hitLocation.length === length;

  return { hit, getLength, setLength, isSunk, hitLocation };
}
