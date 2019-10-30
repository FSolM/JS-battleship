const getBorderClass = (row, col, grid) => {
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

const generateBoard = () => {
  const board = document.getElementById('board');
  board.innerHTML = '';
  const letters = ['a','b','c','d','e','f','g','h','i','j'];
  for (let i = 0; i < 10; i += 1) {
    let row = `<div id="cells-${i + 1}" class="cells">`;
    for (let j = 0; j < 10; j += 1) {
      row += `<div id="cell-${i + 1}-${letters[j]}" class="cell ${getBorderClass(i, j, 10)}"></div>`
    }
    row += "</div>"
    board.innerHTML+= row;
  }
}

export default () => {
  generateBoard();
};
