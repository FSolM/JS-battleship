export default (() => {
  let playerPositions = []
  let playerShips = [];

  const getPlayerPositions = () => playerPositions;

  const getShip = (id) => {
    for (let i = 0; i < playerShips.length; i += 1) {
      if (playerShips[i].getID() === id ){
        return playerShips[i];
      }
    }
    return undefined;
  };

  const addPlayerShip = (ship) => {
    playerShips.push(ship);
  };

  const addShipPositions = (id, positions) => {
    for (let i = 0; i < playerShips.length; i += 1) {
      if (playerShips[i].getID() === id) {
        positions.forEach((position) => {
          playerShips[i].addPosition(position);
        });
        return playerShips[i].getPositions();
      }
    }
  };

  const addPlayerPositions = (positions) => {
    positions.forEach(element => {
      playerPositions.push(element);
    });
  };

  const removePlayerPositions = (positions) => {
    positions.forEach(element => {
      const idx = playerPositions.indexOf(element);
      playerPositions.splice(idx, 1);
    });
  };

  const resetShipPositions = (id) => {
    for (let i = 0; i < playerShips.length; i += 1) {
      if (playerShips[i].getID() === id) {
        return playerShips[i].resetPositions();
      }
    }
  };

  const removeShipPositions = (id, positions) => {
    for (let i = 0; i < playerShips.length; i +=1 ) {
      if (playerShips[i].getID() === id) {
        playerShips[i].removePositions(positions);
        break;
      }
    }
  };

  const removeAllShipsPositions = () => {
    playerShips.forEach((ship) => {
      ship.resetPositions();
    });
    playerPositions = [];
    playerShips = [];
  };

  const removeLastPlayerPosition = () => {
    playerPositions.pop();
  };

  const hasPlayerPosition = (element) => playerPositions.includes(element);

  const hasPlayerPositions = (positions) => {
    for (let i = 0; i < positions.length; i += 1) {
      if (playerPositions.includes(positions[i])) {
        return true;
      }
    }
    return false;
  };

  return { 
    getPlayerPositions, 
    addPlayerPositions, 
    addPlayerShip,
    getShip,
    addShipPositions,
    removeAllShipsPositions,
    removePlayerPositions, 
    removeShipPositions,
    resetShipPositions,
    hasPlayerPosition, 
    removeLastPlayerPosition,
    hasPlayerPositions,
  };
})();
