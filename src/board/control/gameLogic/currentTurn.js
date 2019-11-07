import gameBoard from '../../gameBoard';
import checkPositions from './checkPositions';
import makeMove from '../AI/makeMove';
import gameOverRender from './gameOverRender'

const getTarget = (player) => {
  if (!player) {
    return document.getElementById('board');
  }
  return document.getElementById('b-board');
}

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

export default (player, position) => {
  const cell = position.replace('cell-', '');
  const positions = gameBoard.getPositions(!player);
  if (positions.includes(cell)) {
    getCell(position, player).classList.add('hit');
    if (checkPositions(cell, player)) {
      console.log('Game Over');
      // Render Game Over
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
