import gameBoard from '../gameBoard'
import boardRender from '../boardRender';
import shipHandling from '../../ships/shipHandling'
import makeMove from '../control/AI/makeMove'

export default () => {
  makeMove.restartMovements();
  gameBoard.reinitialize();
  document.getElementById('user-options').classList.remove('set-hidden');
  document.getElementById('ships').classList.remove('set-hidden');
  document.getElementsByClassName('container')[0].classList.add('full-size');
  const bBoard = document.getElementById('b-board');
  bBoard.innerHTML = "";
  const bBoardContainer = document.getElementsByClassName('container')[1];
  bBoardContainer.innerHTML = "";
  bBoardContainer.appendChild(bBoard);
  document.getElementById('btn-game-start').disabled = true;
  boardRender();
  shipHandling();
}