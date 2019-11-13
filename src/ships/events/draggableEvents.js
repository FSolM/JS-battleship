import event from '../../events';

export default () => {
  const ships =  document.querySelectorAll('*[class^="ship"]');
  ships.forEach((ship) => {    
    ship.addEventListener('dragstart',event.dragStart, false);
    ship.addEventListener('dragend', event.dragEnd, false);
    ship.addEventListener('click', event.rotate, false);
  });
};
