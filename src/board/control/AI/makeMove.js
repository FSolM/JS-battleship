import currentTurn from '../gameLogic/currentTurn';

let movements = [];
const letters = 'abcdefghij'.split('');

const getCol = () => Math.floor((Math.random() * 10) + 1);

const getRow = () => letters[Math.floor(Math.random() * 10)];

const getMovement = () => {
  let movement = '';
  do {
    movement = `cell-${getCol()}-${getRow()}`
  }
  while (movements.includes(movement))
  console.log(`Movement: ${movement}`);
  return movement;
};

export default () => {
  const movement = getMovement();
  movements.push(movement);
  console.log(movements);
  currentTurn(false, movement);
};
