export default (id, type, size) => {
  let positions = [];
  let hitPositions = [];

  const getID = () => id;

  const getType = () => type;

  const getSize = () => size;

  const getPositions = () => positions;

  const addPosition = (position) => {
    positions.push(position);
  };

  const overridePositions = (newPositions) => {
    const pivot = positions[0];
    positions = [pivot, ...newPositions];
  };

  const resetPositions = () => {
    const previousPositions = [...positions];
    positions = [];
    return previousPositions;
  };

  const hit = (position) => {
    hitPositions.push(position);
  };

  const isSunk = () => positions.length === hitPositions.length;

  return {
    getID,
    getType,
    getSize,
    getPositions,
    addPosition,
    overridePositions,
    resetPositions,
    hit,
    isSunk,
  }
}