import gameBoard from './board/gameBoard';

// TODO: rework into different exports
// See if it can be modularaized

let dragged = '';

const getDragged = () => dragged;

const setDragged = (id) => {
  dragged = id;
};

const dragOver = (e) => {
  e.preventDefault();    
};

const dragEnter = (e) => {
  e.preventDefault();
};

const dragLeave = (e) => {
  e.preventDefault();
};

const getSize = (ship_id) => {
  if (ship_id.match(/battleship/)){
    return 4; 
  } else
  if (ship_id.match(/cruiser/)){
    return 3;
  } else
  if (ship_id.match(/destroyer/)){
    return 2;
  } else
  if (ship_id.match(/submarine/)){
    return 1;
  }
};

const getPositions = (position, classes, size) => {
  const row = parseInt(position.match(/\d+/)[0]); // Will get positions from 1 to 10
  const col = position.substring(5).match(/[a-j]/)[0]; // Will get positions from a to j
  const orientation = classes.match(/horizontal|vertical/)[0];
  const letters = 'abcdefghij'.split('');
  let positions = [];
  if (size > 1) {
    for (let i = 1; i < size; i += 1) {
      if (orientation === 'horizontal') {
        positions.push(`${row}-${letters[(letters.indexOf(col) + i)]}`);
      } else
      if (orientation === 'vertical') {
        positions.push(`${row + i}-${col}`);
      }
    }
  }
  return positions;
};

const notValidMove = (e) => {
  const draggedId = getDragged();
  const dragged = document.getElementById(draggedId);
  const positions = getPositions(e.target.id, dragged.className, getSize(draggedId));
  const totalPositions = [e.target.id.substring(5), ...positions];
  for (let i = 0; i < totalPositions.length; i += 1) {
    if (totalPositions[i].match(/undefined/) || parseInt(totalPositions[i].match(/\d+/)[0]) > 10) {
      return true;
    }
  }
  return gameBoard.isInvalidPosition(totalPositions, draggedId);
};

const setPositions = (cell, node, ship_id) => {
  const position = cell.id.substring(5); // Sets mixed positions like 1-a, 2-b, ...
  const size = getSize(ship_id);
  const positions = [position, ...getPositions(cell.id, node.className, size)];
  const newPositions = gameBoard.addShipPositions(ship_id, positions);
  if (newPositions) {
    gameBoard.addPlayerPositions(newPositions);
  }
};

const splitClasses = (classString) => {
  const classArray = classString.split(' ');
  classArray.splice(1, 0, 'dropped');
  return classArray.join(' ');
};

const onDrop = (e) => {
  const id = e.dataTransfer.getData('text');
  const child = document.getElementById(id);
  const removedPositions = gameBoard.resetShipPositions(id);
  if (removedPositions) {
    gameBoard.removePlayerPositions(removedPositions);
  }
  e.target.appendChild(child);
  setPositions(e.target, child, id);
  child.className = splitClasses(child.className);
};

const drop = (e) => {
  e.preventDefault();
  if (notValidMove(e)){
    return
  } else
  if (/^cell/.test(e.target.id)) {
    onDrop(e);
  }
};

const dragStart = (e) => {
  console.log('DragStart Event Called');
  e.target.classList.add('drag-start');
  e.dataTransfer.setData('text', e.target.id);
  setDragged(e.target.id)
  setTimeout(() => (e.target.classList.add('invisible')), 0);
};

const dragEnd = (e) => {
  console.log('DragEnd Event Called');
  e.target.classList.remove('invisible');
  e.target.classList.remove('drag-start');
};

const updateOrientation = (target, orientation, offset) => {
  target.classList.remove(orientation);
  let position = '';
  if (orientation.includes('vertical')) {
    position = 'horizontal';
  } else
  if (orientation.includes('horizontal')) {
    position = 'vertical';
  }
  target.classList.add(`${position}${orientation.substring(offset)}`);
};

const changeStyleOrientation = (e) => {
  e.target.classList.forEach((cssClass) => {
    if (/^horizontal/.test(cssClass)) {
      updateOrientation(e.target, cssClass, 10);
    } else
    if (/^vertical/.test(cssClass)) {
      updateOrientation(e.target, cssClass, 8);
    }
  });
};

const rotate = (e) => {
  console.log('Click Event Called');
  const currentShip = gameBoard.getShip(e.target.id);
  const row = parseInt(currentShip.getPositions()[0].match(/\d+/)[0]); // Will obtain pivot position and extract the numbers from 1 to 10
  const col = currentShip.getPositions()[0].match(/[a-j]/)[0]; // Will obtain the pivot position and extract the letters from a to j
  //const removePositions = [...currentShip.getPositions()].splice(1);
  const orientation = e.target.className.match(/horizontal|vertical/)[0];
  const letters = 'abcdefghij'.split('');
  let newPositions = [];
  if (currentShip.getPositions().length > 1) {
    for (let i = 1; i < currentShip.getPositions().length; i += 1) {
      if (orientation === 'vertical') {
        newPositions.push(`${row}-${letters[(letters.indexOf(col)) + i]}`);
      } else
      if (orientation === 'horizontal') {
        newPositions.push(`${row + i}-${col}`);
      }
    }
  }
  for (let i = 0; i < newPositions.length; i += 1) {
    if (newPositions[i].match(/undefined/) || parseInt(newPositions[i].match(/\d+/)[0]) > 10) {
      return;
    }
  }
  if (!gameBoard.isInvalidPosition(newPositions, e.target.id)) {
    const previousShipPositions = currentShip.overridePositions(newPositions);
    gameBoard.removePlayerPositions(previousShipPositions);
    gameBoard.addPlayerPositions(newPositions);
    changeStyleOrientation(e);
  }
};

export default {
  dragOver,
  dragEnter,
  dragLeave,
  drop,
  dragStart,
  dragEnd,
  rotate,
  getDragged,
};
