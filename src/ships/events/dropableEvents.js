import event from '../../events';

export default () => {
  const cells = document.querySelectorAll('.cell');
  for (const cell of cells) {
    cell.addEventListener('dragover', event.dragOver, false);
    cell.addEventListener('dragenter', event.dragEnter, false);
    cell.addEventListener('dragleave', event.dragLeave, false);
    cell.addEventListener('drop', event.drop, false);
  }
};
