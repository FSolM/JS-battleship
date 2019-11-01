import gameBoard from '../../board/gameBoard';
import ship from '../ship';
import draggableEvents from './draggableEvents'

const dragOver = (e) => {
  e.preventDefault();    
}

// Check methods

const notValidMove = (e) => {
  const draggedId = draggableEvents.getDragged();
  const dragged = document.getElementById(draggedId);
  const positions = getPositions(e.target.id, dragged.className, getSize(draggedId));
  const totalPositions = [e.target.id.substring(5), ...positions];
  let returning = false;
  totalPositions.forEach((position) => {
    if (position.match(/undefined/)){
      returning = !returning;
    }
  })
  console.log("Evaluate this positions: "+totalPositions);
  const result = gameBoard.hasPlayerPositions(totalPositions);
  return result || returning;
}

const dragEnter = (e) => {
  e.preventDefault();
}

const dragLeave = (e) => {
  e.preventDefault();
}

const splitClasses = (classString) => {
  const classArray = classString.split(' ');
  classArray.splice(1, 0, 'dropped');
  return classArray.join(' ');
};

const getSize = (ship_id) => {
  if (ship_id.match(/battleship/)){
    return 4; 
  } else if (ship_id.match(/cruiser/)){
    return 3;
  } else if (ship_id.match(/destroyer/)){
    return 2;
  } else if (ship_id.match(/submarine/)){
    return 1;
  }
}

const getPositions = (position, classes, size) => {
  console.log("********************")
  console.log("Position Received " + position)
  const row = parseInt(position.match(/\d+/)[0]); // will get de 1 in 1-b
  const col = position.substring(5).match(/[a-j]/)[0]; // will get the a in 10-a
  const orientation = classes.match(/horizontal|vertical/)[0];
  const letters = "abcdefghij".split("");
  let positions = []
  if (size > 1) {
    for (let i = 1; i < size; i+=1) {
      let pos = '';
      if(orientation === 'horizontal') {
        pos = row + '-' + letters[(letters.indexOf(col) + i)];
      } else if(orientation === 'vertical') {
        pos = (row + i) + '-' + col;
      }
      positions.push(pos);
    }
  }
  return positions;
}

const setPositions = (cell, node, ship_id) => {
  console.log("Setting Positions");
  const position = cell.id.substring(5); //should be 1-a, d-6, or so...
  const size = getSize(ship_id);
  const positions = [position, ...getPositions(cell.id, node.className, size)]
  const newPositions = gameBoard.addShipPositions(ship_id, positions);
  if (newPositions){
    gameBoard.addPlayerPositions(newPositions);
  }
  console.log("Player positions updated: "+ gameBoard.getPlayerPositions());
}

const onDrop = (e) => {
  console.log("On Drop...")
  const id = e.dataTransfer.getData('text');
  const child = document.getElementById(id);
  const removedPositions = gameBoard.resetShipPositions(id);
  if (removedPositions){
    gameBoard.removePlayerPositions(removedPositions);
  }
  e.target.appendChild(child);
  setPositions(e.target, child, id);
  child.className = splitClasses(child.className);
}

const drop = (e) => {
  e.preventDefault();
  if (notValidMove(e)){
    return
  } else if (/^cell/.test(e.target.id)) {
    onDrop(e);
  }
}

// Check methods

export default () => {
  const cells = document.querySelectorAll('.cell');
  for (const cell of cells) {
    cell.addEventListener('dragover', dragOver, false);
    cell.addEventListener('dragenter', dragEnter, false);
    cell.addEventListener('dragleave', dragLeave, false);
    cell.addEventListener('drop', drop, false);
  }
}
