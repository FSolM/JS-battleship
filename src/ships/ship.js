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
    const previousPositions = [...positions].splice(1);
    positions = [pivot, ...newPositions];
    return previousPositions;
  };

  const resetPositions = () => {
    const previousPositions = [...positions];
    positions = [];
    return previousPositions;
  };

  const hit = (position) => {
    hitPositions.push(position);
    if (isSunk()) {
      return positions;
    }
    return false;
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
  };
};
