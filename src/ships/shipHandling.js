import draggableEvents from './events/draggableEvents';
import dropableEvents from './events/dropableEvents';
import gameBoard from '../board/gameBoard';
import ship from './ship';
import ships from './generateShips';

const generateShips = () => {
  const shipsContainer = document.getElementById('ships');
  let shipsHtml = '';
  ships.forEach((current_ship) => {
    const quantity = current_ship.quantity;
    for (let i = 0; i < quantity; i += 1) {
      const newShip = ship(`${current_ship.name}-${i}`, current_ship.name, current_ship.size);
      gameBoard.addPlayerShip(newShip);
      shipsHtml += `<div id="${current_ship.name}-${i}" class="ship-${current_ship.name}-${i} horizontal-${current_ship.name}" draggable="true"></div>`
    }
  });
  shipsContainer.innerHTML = shipsHtml;
};

export default () => {
  generateShips();
  draggableEvents();
  dropableEvents();
};
