import userOptionsListeners from './userOptionsListeners';
import gameStartListeners from './gameStartListeners';

export default (target) => {
  target.innerHTML = `
    <button id="btn-randomize" class="btn-randomize">Random</button><br>
    <button id="btn-game-start" class="btn-game-start">Start Game</button>
  `;
  userOptionsListeners(document.getElementById('btn-randomize'));
  gameStartListeners(document.getElementById('btn-game-start'));
};
