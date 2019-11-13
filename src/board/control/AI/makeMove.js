import currentTurn from '../gameLogic/currentTurn';

export default (() => {
  let movements = [];
  const letters = 'abcdefghij'.split('');

  const getCol = () => Math.floor((Math.random() * 10) + 1);

  const getRow = () => letters[Math.floor(Math.random() * 10)];

  const getMovement = () => {
    let movement = '';
    do {
      movement = `cell-${getCol()}-${getRow()}`;
    }
    while (movements.includes(movement))
    return movement;
  };

  const play = () => {
    const movement = getMovement();
    movements.push(movement);
    currentTurn(false, movement);
  }
  
  const restartMovements = () => {
    movements = [];
  }

  return { play, restartMovements };
})();
