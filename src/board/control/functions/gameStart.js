import event from '../../../events';
import boardRender from '../../boardRender';

const hideElements = () => {
  document.getElementById('user-options').classList.add('set-hidden');
  document.getElementById('ships').classList.add('set-hidden');
  document.getElementsByClassName('container')[0].classList.remove('full-size');
};

const removeEventListeners = () => {
  const ships = document.querySelectorAll('*[class^="ship"]');
  const cells = document.querySelectorAll('*[class^="cell"]');
  cells.forEach((cell) => {
    cell.removeEventListener('dragover',  event.dragOver);
    cell.removeEventListener('dragenter', event.dragEnter);
    cell.removeEventListener('dragleave', event.dragLeave);
    cell.removeEventListener('drop', event.drop);
  });
  ships.forEach((ship) => {
    ship.draggable = false;
    ship.removeEventListener('dragstart', event.dragStart, false);
    ship.removeEventListener('dragend', event.dragEnd, false);
    ship.removeEventListener('click', event.rotate, false);
  });
};

export default () => {
  removeEventListeners();
  hideElements();
  boardRender('b-board');
};
