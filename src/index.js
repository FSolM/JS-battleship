import shipHandling from './board/shipHandling';
import boardRender from './board/boardRender';

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

    ships.forEach( (ship) => {
      const quantity = ship.quantity;
      for (let i = 0; i < quantity; i += 1){
        shipsHtml += `<div id="${ship.name}-${i}" class="ship-${ship.name}-${i} horizontal-${ship.name}" draggable="true"></div>`
      }
    });

    shipsContainer.innerHTML = shipsHtml;
  }

  generateShips();
  boardRender();
  shipHandling();
  
})();
