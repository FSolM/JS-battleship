import ship from '../ships/ship';

export default (() => {
  let playerPositions = []

  let playerShips = [];
  let rivalShips = [];

  const getPlayerPositions = () => {
    return playerPositions;
  }

  const getShip = (id) => {
    for (let i = 0; i < playerShips.length; i +=1) {
      if (playerShips[i].getID() === id ){
        return playerShips[i];
      }
    }
    return undefined;
  }

  const addPlayerShip = (ship) => {
    playerShips.push(ship);
  }

  const addShipPositions = (id, positions) => {
    let newPostions;
    playerShips.forEach((_ship) => {
      if(_ship.getID() === id){
        positions.forEach(position => _ship.addPosition(position));
        newPostions = _ship.getPositions();
      }
    });
    return newPostions;
  }

  const addPlayerPositions = (positions) => {
    positions.forEach(element => {
      playerPositions.push(element);
    });
  }

  const removePlayerPositions = (positions) => {
    positions.forEach(element => {
      const idx = playerPositions.indexOf(element);
      playerPositions.splice(idx, 1);
    });
  }

  const resetShipPositions = (id) => {
    let removedPositions;
    playerShips.forEach((_ship) => {
      if(_ship.getID() === id){
        removedPositions = _ship.resetPositions();
      }
    })
    return removedPositions;
  }

  const removeShipPositions = (id, positions) => {
    for (let i = 0; i < playerShips.length; i +=1 ) {
      if (playerShips[i].getID() === id) {
        playerShips[i].removePositions(positions);
        break;
      }
    }
  }

  const removeLastPlayerPosition = () => {
    playerPositions.pop();
  }

  const hasPlayerPosition = (element) => {
    return playerPositions.includes(element);
  }

  const hasPlayerPositions = (positions) => {
    let has = 0;
    positions.forEach((position) => {
      if (playerPositions.includes(position)){
        console.log("Position "+ position+ " is already in the positions array" )
        has += 1;
      }
    })
    return has > 0;
  }

  return { 
    getPlayerPositions, 
    addPlayerPositions, 
    addPlayerShip,
    getShip,
    addShipPositions,
    removePlayerPositions, 
    removeShipPositions,
    resetShipPositions,
    hasPlayerPosition, 
    removeLastPlayerPosition,
    hasPlayerPositions,
  }

})();