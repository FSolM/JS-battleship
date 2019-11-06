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

  const addPlayerPosition = position => playerPositions.push(position);

  const addPlayerPositions = (positions) => {
    positions.forEach(element => {
      playerPositions.push(element);
    });
    checkIfFilledPositions();
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
        checkIfFilledPositions();
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
    checkIfFilledPositions();
  };

  const removeLastPlayerPosition = () => {
    playerPositions.pop();
    checkIfFilledPositions();
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

  const isInvalidPosition = (positions, id) => {
    const currentShipPositions = getShip(id).getPositions();
    for (let i = 0; i < positions.length; i += 1) {
      if (playerPositions.includes(positions[i]) && !(currentShipPositions.includes(positions[i]))) {
        return true;
      }
    }
    return false;
  }

  const checkIfFilledPositions = () => {
    if (playerPositions.length === 20) {
      document.getElementById('btn-game-start').disabled = false;
    } else {
      document.getElementById('btn-game-start').disabled = true;
    }
  };

  return { 
    getPlayerPositions, 
    addPlayerPositions, 
    addPlayerPosition,
    addPlayerShip,
    getShip,
    addShipPositions,
    isInvalidPosition,
    removeAllShipsPositions,
    removePlayerPositions, 
    removeShipPositions,
    resetShipPositions,
    hasPlayerPosition, 
    removeLastPlayerPosition,
    hasPlayerPositions,
  };
})();