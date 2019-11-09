import gameBoard from '../../gameBoard';
import checkPositions from './checkPositions';
import makeMove from '../AI/makeMove';
import gameOverRender from './gameOverRender';

const getTarget = (player) => {
  if (!player) {
    return document.getElementById('board');
  }
  return document.getElementById('b-board');
};

const getCell = (id, player) => {
  const target = getTarget(player);
  for (let i = 0; i < target.children.length; i += 1) {
    for (let j = 0; j < target.children[i].children.length; j += 1) {
      if (target.children[i].children[j].id === id) {
        return target.children[i].children[j];
      }
    }
  }
  return undefined;
};

const checkOrientation = (positions) => {
  if (positions.length === 1) {
    return 'square';
  } else {
    if (positions[0][0] === positions[1][0]) {
      return 'horizontal';
    } else {
      return 'vertical';
    }
  }
};

const sunkCells = (player, positions) => {
  let currentBoard = player ? 'board' : 'b-board';
  const board = document.getElementById(currentBoard); 
  let orientation = checkOrientation(positions);
  switch (orientation) {
    case 'square': {
      const currentCell = board.getElementsByClassName(positions[0])[0];
      currentCell.classList.add('sunk-square');
      currentCell.classList.add('sunk');
      break;
    }
    case 'horizontal': {
      for (let i = 0; i < positions.length; i += 1) {
        let borderSunk = '';
        if (i === 0) {
          borderSunk = 'sunk-h-first';
        } else
        if (i === (positions.length - 1)) {
          borderSunk = 'sunk-h-last';
        } else {
          borderSunk = 'sunk-h-inner';
        }
        const currentCell = board.getElementsByClassName(positions[i])[0];
        currentCell.classList.add(borderSunk);
        currentCell.classList.add('sunk');
      }
      break;
    }
    case 'vertical': {
      for (let i = 0; i < positions.length; i += 1) {
        let borderSunk = '';
        if (i === 0) {
          borderSunk = 'sunk-v-first';
        } else
        if (i === (positions.length - 1)) {
          borderSunk = 'sunk-v-last';
        } else {
          borderSunk = 'sunk-v-inner';
        }
        const currentCell = board.getElementsByClassName(positions[i])[0];
        currentCell.classList.add(borderSunk);
        currentCell.classList.add('sunk');
      }
      break;
    }
    default: {
      console.error('Something unexpected happened');
    }
  }
}

export default (player, position) => {
  const cell = position.replace('cell-', '');
  const positions = gameBoard.getPositions(!player);
  if (positions.includes(cell)) {
    const isSunk = gameBoard.hitShipByCell(cell, !player);
    getCell(position, player).classList.add('hit');
    if (isSunk) {
      sunkCells(!player, isSunk);
    }
    if (checkPositions(cell, player)) {
      gameOverRender(player);
    }
    if (!player) {
      makeMove.play();
    }
  } else {
    getCell(position, player).classList.add('missed');
    if (player) {
      makeMove.play();
    }
  }
};
