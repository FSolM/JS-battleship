export const getBorderClass = (row, col, grid) => {
  if ((row >= 0 && row < grid - 1) && col === 0) {
    return 'first-border';
  } else
  if (row === grid - 1 && col === 0) {
    return 'bottom-right-border';
  } else
  if (row === grid - 1 && col > 0) {
    return 'last-row-inner-border';
  } else {
    return 'inner-border';
  }
}

const generateIndexNumber = () => {
  const numberIndex = document.createElement('div');
  numberIndex.classList.add('number-index');
  let inner = `<div class="number-index-item number-index-item-special"></div>`
  for (let i = 1; i <= 10; i += 1) {
    inner += `<div class="number-index-item">${i}</div>`;
  }
  numberIndex.innerHTML = inner;
  return numberIndex;
}

const generateBoard = (board = 'board') => {
  const target = document.getElementById(board);
  target.innerHTML = '';
  let lettersIndex = '<div class="letters-index">'
  const letters = ['a','b','c','d','e','f','g','h','i','j'];
  for (let i = 0; i < 10; i += 1) {
    lettersIndex += `<div class="board-letters"> ${letters[i]} </div>`
  }
  lettersIndex += '</div>';
  target.innerHTML += lettersIndex;
  for (let i = 0; i < 10; i += 1) {
    let row = `<div id="cells-${i + 1}" class="cells">`;
    for (let j = 0; j < 10; j += 1) {
      row += `<div id="cell-${i + 1}-${letters[j]}" class="cell ${getBorderClass(i, j, 10)} ${i + 1}-${letters[j]}"></div>`
    }
    row += "</div>"
    target.innerHTML += row;
  }
  if (board == 'board'){
    const possible = document.getElementsByClassName('number-index')[0]
    if(!document.getElementsByClassName('container')[0].contains(possible)){
      const parent = document.getElementsByClassName('container')[0]
      parent.insertBefore(generateIndexNumber(), parent.children[1])
    }
  } else {
    const parent = document.getElementsByClassName('container')[1]
    parent.insertBefore(generateIndexNumber(), parent.children[1])
  }
  
}

export default (board) => {
  generateBoard(board);
};
