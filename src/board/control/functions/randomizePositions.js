import shipHandling from '../../../ships/shipHandling';
import boardRender from '../../boardRender';
import gameBoard from '../../gameBoard';
import ships from '../../../ships/generateShips';
import ship from '../../../ships/ship';

const letters = 'abcdefghij'.split('');
let usedPositions = [];

const checkPositions = (positions) => {
  for (let i = 0; i < positions.length; i += 1) {
    const temp = positions[i].split('-');
    if (positions[i].includes('undefined')) {
      return false
    } else
    if (temp[0] > 10 || temp[1] > 'j') {
      return false
    }
    for (let j = 0; j < usedPositions.length; j += 1) {
      if (usedPositions[j][1].includes(positions[i])) {
        return false
      }
    }
  }
  return true;
};

const savePosition = (id, position, orientation) => {
  usedPositions.push([id, [...position], orientation]);
};

const setPositionArray = (pivot, size, orientation) => {
  let position = [pivot];
  const temp = pivot.split('-');
  const pivotNum = parseInt(temp[0]);
  const pivotLetter = temp[1];
  if (orientation === 'horizontal') {
    for (let i = 0; i < size; i += 1) {
      position.push(`${pivotNum}-${letters[letters.indexOf(pivotLetter) + i + 1]}`);
    }
  } else {
    for (let i = 0; i < size; i += 1) {
      position.push(`${pivotNum + i + 1}-${pivotLetter}`);
    }
  }
  return position;
};

const setPivot = () => `${Math.floor(Math.random() * 10) + 1}-${letters[Math.floor(Math.random() * 10)]}`;

const setPositions = () => {
  ships.forEach((shipType) => {
    for (let i = 0; i < shipType.quantity; i += 1) {
      const pivot = setPivot();
      let orientation = '';
      let positionArray = [];
      if (Math.floor(Math.random() * 2) === 0) {
        orientation = 'horizontal';
        positionArray = setPositionArray(pivot, (shipType.size - 1), orientation);
      } else {
        orientation = 'vertical';
        positionArray = setPositionArray(pivot, (shipType.size - 1), orientation);
      }
      if (checkPositions(positionArray)) {
        savePosition(`${shipType.name}-${i}`, positionArray, orientation);
      } else {
        i -= 1;
      }
    }
  });
};

const sendData = (player) => {
  for (let i = 0; i < usedPositions.length; i += 1) {
    gameBoard.addShip(ship(usedPositions[i][0], usedPositions[i][0].split('-')[0], usedPositions[i][1].length), player);
    gameBoard.addShipPositions(usedPositions[i][0], usedPositions[i][1], player);
    gameBoard.addPositions(usedPositions[i][1], player);
  }
};

const renderPositions = () => {
  for (let i = 0; i < usedPositions.length; i += 1) {
    const child = document.getElementById(usedPositions[i][0]);
    const target = document.getElementById(`cell-${usedPositions[i][1][0]}`);
    target.appendChild(child);
    child.className = `ship-${usedPositions[i][0]} dropped ${usedPositions[i][2]}-${usedPositions[i][0].split('-')[0]}`;
  }
};

const resetPositions = () => {
  boardRender();
  shipHandling();
  gameBoard.removeAllShipsPositions();
  usedPositions = [];
};

export default (player = true) => {
  if (player) {
    resetPositions();
    setPositions();
    sendData(player);
    renderPositions();
  } else {
    setPositions();
    sendData(player);
  }
  usedPositions = [];
};
