import gameBoard from '../../gameBoard';

const gameOver = (player) => gameBoard.getPositions(!player).length === 0;

export default (position, player) => {
  gameBoard.removePosition(position, !player);
  console.log(gameBoard.getPositions(!player));
  return gameOver(player);
}
