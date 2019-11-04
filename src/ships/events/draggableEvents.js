import gameBoard from '../../board/gameBoard';

export default (() => {
  let dragged = '';

  const getDragged = () => dragged;

  const setDragged = (id) => {
    dragged = id;
  };

  const dragStart = (e) => {
    e.target.classList.add('drag-start');
    e.dataTransfer.setData('text', e.target.id);
    setDragged(e.target.id)
    setTimeout(() => (e.target.classList.add('invisible')), 0);
  };
  
  const dragEnd = (e) => {
    e.target.classList.remove('invisible');
    e.target.classList.remove('drag-start');
  };
  
  const rotate = (e) => {
    const currentShip = gameBoard.getShip(e.target.id);
    const row = parseInt(currentShip.getPositions()[0].match(/\d+/)[0]); // Will obtain pivot position and extract the numbers from 1 to 10
    const col = currentShip.getPositions()[0].match(/[a-j]/)[0]; // Will obtain the pivot position and extract the letters from a to j
    //const removePositions = [...currentShip.getPositions()].splice(1);
    const orientation = e.target.className.match(/horizontal|vertical/)[0];
    const letters = 'abcdefghij'.split('');
    let newPositions = [];
    if (currentShip.getPositions().length > 1) {
      for (let i = 1; i < currentShip.getPositions().length; i += 1) {
        if (orientation === 'vertical') {
          newPositions.push(`${row}-${letters[(letters.indexOf(col)) + i]}`);
        } else
        if (orientation === 'horizontal') {
          newPositions.push(`${row + i}-${col}`);
        }
      }
      
    }

    for (let i = 0; i < newPositions.length; i += 1) {
      if (newPositions[i].match(/undefined/) || parseInt(newPositions[i].match(/\d+/)[0]) > 10) {
        return;
      }
    }

    if (!gameBoard.isInvalidPosition(newPositions, e.target.id)) {
      const previousShipPositions = currentShip.overridePositions(newPositions);
      gameBoard.removePlayerPositions(previousShipPositions);
      gameBoard.addPlayerPositions(newPositions);
      changeStyleOrientation(e);
    }
  };

  const updateOrientation = (target, orientation, offset) => {
    target.classList.remove(orientation);
    let position = '';
    if (orientation.includes('vertical')) {
      position = 'horizontal';
    } else
    if (orientation.includes('horizontal')) {
      position = 'vertical';
    }
    target.classList.add(`${position}${orientation.substring(offset)}`);
  };

  const changeStyleOrientation = (e) => {
    e.target.classList.forEach((cssClass) => {
      if (/^horizontal/.test(cssClass)) {
        updateOrientation(e.target, cssClass, 10);
      } else
      if (/^vertical/.test(cssClass)) {
        updateOrientation(e.target, cssClass, 8);
      }
    });
  };

  const init = () => {
    const ships =  document.querySelectorAll('*[class^="ship"]');
    for (const ship of ships) {
      ship.addEventListener('dragstart', dragStart, false);
      ship.addEventListener('dragend', dragEnd, false);
      ship.addEventListener('click', rotate, false);
    }
  };

  return { init, getDragged };
})();
