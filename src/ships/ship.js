export default (id, type, size) => {
  let positions = [];
  let hitPositions = [];

  const getID = () => {
    return id;
  }
  const getType = () => {
    return type;
  }
  const getSize = () => {
    return size
  }
  const getPositions = () => {
    return positions;
  }

  const removePositions = (_positions) => {
    for (let i = 0; i < _positions.length; i += 1) {
      positions.splice(_positions[i].indexOf(position));
    }
  }

  const addPosition = (position) => {
    positions.push(position);
  }

  const overridePositions = (newPositions) => {
    const pivot = positions[0];
    console.log(newPositions)
    positions = [pivot, ...newPositions];
    console.log({ pivot, positions, newPositions })
  };

  const resetPositions = () => {
    const previousPositions = [...positions];
    positions = [];
    return previousPositions;
  }

  const hit = (position) => {
    hitPositions.push(position);
  }

  const isSunk = () => {
    positions.length === hitPositions.length;
  }

  return {
    getID,
    getType,
    getSize,
    getPositions,
    addPosition,
    overridePositions,
    resetPositions,
    removePositions,
    hit,
    isSunk,
  }
}