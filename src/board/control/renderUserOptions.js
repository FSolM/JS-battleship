import userOptionsListeners from './userOptionsListeners';

export default (target) => {
  target.innerHTML = `
    <button id="btn-randomize" class="btn-randomize">Random</button>
  `;
  userOptionsListeners(target);
};
