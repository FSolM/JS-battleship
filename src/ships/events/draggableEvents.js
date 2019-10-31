import gameBoard from '../../board/gameBoard'
export default(() => {
  let dragged = '';

  const getDragged = () => {
    return dragged
  }

  const setDragged = (id) => {
    dragged = id;
  }

  const dragStart = (e) => {
    e.target.classList.add('drag-start');
    e.dataTransfer.setData('text', e.target.id);
    const removedPositions = gameBoard.resetShipPositions(e.target.id);
    if (removedPositions){
      gameBoard.removePlayerPositions(removedPositions);
    }
    setDragged(e.target.id)
    setTimeout(() => (e.target.classList.add('invisible')),0);
  }
  
  const dragEnd = (e) => {
    e.target.classList.remove('invisible');
    e.target.classList.remove('drag-start');
  }
  
  const rotate = (e) => {
    const currentShip = gameBoard.getShip(e.target.id);
    const row = parseInt(currentShip.getPositions()[0].match(/\d+/)[0]); // will get de 1 in 1-b
    const col = currentShip.getPositions()[0].match(/[a-j]/)[0]; // will get the a in 10-a
    const removePositions = [...currentShip.getPositions()].splice(1);
    const orientation = e.target.className.match(/horizontal|vertical/)[0];
    const letters = "abcdefghij".split("");
    let positions = []
    console.log(currentShip.getPositions().length)
    if (currentShip.getPositions().length > 1) {
      for (let i = 1; i < currentShip.getPositions().length; i+=1) {
        let pos = '';
        if(orientation === 'vertical') {
          console.log("going from vertical to horizontal")
          pos = row + '-' +letters[(letters.indexOf(col) + i)];
        } else if(orientation === 'horizontal') {
          pos = (row + i) + '-' + col;
        }
        positions.push(pos);
      }
    }
    
    if (!gameBoard.hasPlayerPositions(positions)){
      gameBoard.removePlayerPositions(removePositions);
      gameBoard.addShipPositions(e.target.id, positions);
      gameBoard.addPlayerPositions(positions);
      console.log("Player positions updated: "+ gameBoard.getPlayerPositions());
      changeStyleOrientation(e);
    }
    
  } 
  
  const changeStyleOrientation = (e) => {
    e.target.classList.forEach((cssClass) => {
      if (/^horizontal/.test(cssClass)) {
        e.target.classList.remove(cssClass);
        const newClass = 'vertical' + cssClass.substring(10);
        e.target.classList.add(newClass);
        return;
      } else if (/^vertical/.test(cssClass)) {
        e.target.classList.remove(cssClass);
        const newClass = 'horizontal' + cssClass.substring(8);
        e.target.classList.add(newClass);
        return;
      }
    });
    if (e.target.classList.contains('horizontal')) {
      e.target.classList.remove('horizontal');
      e.target.classList.add('vertical');
    } else
    if (e.target.classList.contains('vertical')) {
      e.target.classList.remove('vertical');
      e.target.classList.add('horizontal');
    }
  }

  const init = () => {
    const ships =  document.querySelectorAll('*[class^="ship"]');
    for (const ship of ships){
      ship.addEventListener('dragstart', dragStart, false);
      ship.addEventListener('dragend', dragEnd, false);
      ship.addEventListener('click', rotate, false);
    }
  }

  

  return {
    init,
    getDragged,
  }
})();
