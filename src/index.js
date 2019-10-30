

let filled = []

const dragStart = (e) => {
  e.target.classList.add('drag-start');
  e.dataTransfer.setData('text', e.target.id);
  setTimeout(() => (e.target.classList.add('invisible')),0);
}
const dragEnd = (e) => {
  e.target.classList.remove('invisible');
  e.target.classList.remove('drag-start');
}
const rotate = (e) => {
  e.target.classList.forEach((cssClass) => {
    if (/^horizontal/.test(cssClass)){
      e.target.classList.remove(cssClass);
      const newClass ="vertical"+ cssClass.substring(10);
      e.target.classList.add(newClass);
      return;
    } else if (/^vertical/.test(cssClass)){
      e.target.classList.remove(cssClass);
      const newClass ="horizontal"+ cssClass.substring(8);
      e.target.classList.add(newClass);
      return;
    }
  })


  if(e.target.classList.contains('horizontal')){
    e.target.classList.remove('horizontal');
    e.target.classList.add('vertical');
  } else if (e.target.classList.contains('vertical')){
    e.target.classList.remove('vertical');
    e.target.classList.add('horizontal');
  }
}
const draggableEvents = () => {
  const ships =  document.querySelectorAll('*[class^="ship"]');
  for (const ship of ships){
    ship.addEventListener('dragstart', dragStart, false);
    ship.addEventListener('dragend', dragEnd, false);
    ship.addEventListener('click', rotate, false);
  }
}



const dragOver = (e) => {
  e.preventDefault();    
}

const dragEnter = (e) => {
  e.preventDefault();
  if (filled.includes(e.target.id)){
    return
  } 
}

const dragLeave = (e) => {
  e.preventDefault();
  if (filled.includes(e.target.id)){
    return
  }
}

const onDrop = (e) => {
  const id = e.dataTransfer.getData("text");
  const child = document.getElementById(id);
  e.target.appendChild(child)
  filled.pop();
  filled.push(e.target.id)
  child.classList.add('dropped')
}

const drop = (e) => {
  e.preventDefault();
  if (filled.includes(e.target.id)){
    return
  } else if(/^cell/.test(e.target.id)){
    onDrop(e);
  }
}





const droppableEvents = () => {
  const cells = document.querySelectorAll('.cell');
  for (const cell of cells){
    cell.addEventListener('dragover', dragOver, false);
    cell.addEventListener('dragenter', dragEnter, false);
    cell.addEventListener('dragleave', dragLeave, false);
    cell.addEventListener('drop', drop, false);
  }
}


(() => {
  let getBorderClass = (row, col, grid) => {
    let borderClass =""
        if( (row >= 0 && row < grid - 1) && col === 0){
          borderClass = 'first-border';
        } else if (row === grid - 1 && col === 0){
          borderClass = 'bottom-right-border';
        } else if(row === grid - 1 && col > 0) {
          borderClass = 'last-row-inner-border';
        } else {
          borderClass = 'inner-border';
        }
    return borderClass
  }
  let generateBoard = () => {
    const board = document.getElementById('board');
    board.innerHTML = ``
    const grid = 10;
    const letters = ['a','b','c','d','e','f','g','h','i','j']
    for (let i = 0; i < grid; i +=1 ) {
      let row = `<div id="cells-${i+1}" class="cells">`
      for (let j = 0; j < grid; j += 1) {
        const borderClass = getBorderClass(i,j,grid);
        row += `<div id="cell-${i+1}-${letters[j]}" class="cell ${borderClass}"></div>`
      }
      row += "</div>"
      board.innerHTML+= row;
    }
  }

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
      for (i = 0; i < quantity; i += 1){
        shipsHtml += `<div id="${ship.name}-${i}" class="ship-${ship.name}-${i} horizontal-${ship.name}" draggable="true"></div>`
      }
    });

    shipsContainer.innerHTML = shipsHtml;


  }

  generateShips();
  generateBoard();
  draggableEvents();
  droppableEvents();
  
})();

