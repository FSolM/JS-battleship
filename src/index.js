import shipHandling from './ships/shipHandling';
import boardRender from './board/boardRender';
import gameBoard from './board/gameBoard';
import ship from './ships/ship';
// TODO Modulate Ship Generator

(() => {
  let generateShips = () => {
    const battleships = {
      size: 4,
      quantity: 1,
      name: 'battleship'
    }
    const cruisers = {
      size: 3,
      quantity: 2,
      name: 'cruiser'
    }
    const destroyers = {
      size: 2,
      quantity: 3,
      name: 'destroyer'
    }
    const submarines = {
      size:1,
      quantity: 4,
      name: 'submarine'
    }
    const ships = [battleships, cruisers, destroyers, submarines]
    const shipsContainer = document.getElementById('ships');
    let shipsHtml = ""

    ships.forEach( (current_ship) => {
      const quantity = current_ship.quantity;
      for (let i = 0; i < quantity; i += 1){
        const newShip = ship(current_ship.name+"-"+i, current_ship.name, current_ship.size);
        gameBoard.addPlayerShip(newShip);
        shipsHtml += `<div id="${current_ship.name}-${i}" class="ship-${current_ship.name}-${i} horizontal-${current_ship.name}" draggable="true"></div>`
      }
    });

    shipsContainer.innerHTML = shipsHtml;
  }

  generateShips();
  boardRender();
  shipHandling();
  
})();
