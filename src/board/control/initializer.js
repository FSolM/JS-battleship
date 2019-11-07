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
  document.getElementById('b-board').innerHTML = "";
  boardRender();
  shipHandling();
}