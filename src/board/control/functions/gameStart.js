import * as event from '../../../events';

const removeEventListeners = () => {
  const ships = document.querySelectorAll('*[class^="ship"]');
  const cells = document.querySelectorAll('*[class^="cell"]');
  cells.forEach((cell) => {
    cell.removeEventListener('dragover', event.dragOver);
    cell.removeEventListener('dragenter', event.dragEnter);
    cell.removeEventListener('dragleave', event.dragLeave);
    cell.removeEventListener('drop', event.drop);
  });
  ships.forEach((ship) => {
    ship.draggable = false;
    ship.addEventListener('dragstart', event.dragStart, false);
    ship.addEventListener('dragend', event.dragEnd, false);
    ship.addEventListener('click', event.rotate, false);
  });
};

export default () => {
  console.log('Game Started');
  removeEventListeners();
};
