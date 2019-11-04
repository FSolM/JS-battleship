import gameBoard from '../../board/gameBoard';
import draggableEvents from './draggableEvents'

const dragOver = (e) => {
  e.preventDefault();    
};

const notValidMove = (e) => {
  const draggedId = draggableEvents.getDragged();
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



const dragEnter = (e) => {
  e.preventDefault();
};

const dragLeave = (e) => {
  e.preventDefault();
};

const splitClasses = (classString) => {
  const classArray = classString.split(' ');
  classArray.splice(1, 0, 'dropped');
  return classArray.join(' ');
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
}

const setPositions = (cell, node, ship_id) => {
  const position = cell.id.substring(5); // Sets mixed positions like 1-a, 2-b, ...
  const size = getSize(ship_id);
  const positions = [position, ...getPositions(cell.id, node.className, size)];
  const newPositions = gameBoard.addShipPositions(ship_id, positions);
  if (newPositions) {
    gameBoard.addPlayerPositions(newPositions);
  }
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

export default () => {
  const cells = document.querySelectorAll('.cell');
  for (const cell of cells) {
    cell.addEventListener('dragover', dragOver, false);
    cell.addEventListener('dragenter', dragEnter, false);
    cell.addEventListener('dragleave', dragLeave, false);
    cell.addEventListener('drop', drop, false);
  }
};
