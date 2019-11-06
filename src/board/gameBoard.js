export default (() => {
  let playerPositions = [];
  let playerShips = [];
  let IAPositions = [];
  let IAShips = []

  const getPositions = (player = true) => {
    if (player){
      return playerPositions
    } else {
      return IAPositions
    }
  };

  const getShip = (id, player = true) => {
    const ships = player ? playerShips : IAShips;
    for (let i = 0; i < ships.length; i += 1) {
      if (ships[i].getID() === id ){
        return ships[i];
      }
    }
    return undefined;
  };

  const addShip = (ship, player = true) => {
    player ? playerShips.push(ship) : IAShips.push(ship);
  };

  const findShip = (id, ships) => {
    for (let i = 0; i < ships.length; i += 1) {
      if (ships[i].getID() === id) {
        return ships[i]
      }
    }
    return undefined;
  };

  const addShipPositions = (id, positions, player = true) => {
    const ship = player ? findShip(id, playerShips) : findShip(id, IAShips);
    positions.forEach((position) => {
      ship.addPosition(position);
    });
    return ship.getPositions();
  };

  const addPosition = (position, player = true) => player ? playerPositions.push(position) : IAPositions.push(position);

  const addPositions = (positions, player = true) => {
    if (player) {
      positions.forEach(element => {
        playerPositions.push(element);
      });
      checkIfFilledPositions()
    } else {
      positions.forEach(element => {
        IAPositions.push(element);
      });
    }
  };

  const removePosition = (position, player = true) => {
    if (player) {
      playerPositions.splice(playerPositions.indexOf(position), 1);
    } else {
      IAPositions.splice(IAPositions.indexOf(position), 1);
    }
  };

  const removePositions = (positions, player = true) => {
    if (player) {
      positions.forEach(element => {
        const idx = playerPositions.indexOf(element);
        playerPositions.splice(idx, 1);
      });
    } else {
      positions.forEach(element => {
        const idx = IAPositions.indexOf(element);
        IAPositions.splice(idx, 1);
      });
    }
  };

  const resetShipPositions = (id, player = true) => {
    let ship = player ? findShip(id, playerShips) : findShip(id, IAShips);
    return ship.resetPositions();
  };

  const removeShipPositions = (id, positions, player = true) => {
    let ship = player ? findShip(id, playerShips) : findShip(id, IAShips);
    checkIfFilledPositions();
    return ship.removePositions(positions);
  };

  const removeAllShipsPositions = (player = true) => {
    if (player) {
      playerShips.forEach((ship) => {
        ship.resetPositions();
      });
      playerShips = []; 
      playerPositions = [];
    } else {
      IAShips.forEach((ship) => {
        ship.resetPositions();
      });
      IAShips = []; 
      IAPositions = [];
    }
    checkIfFilledPositions();
  };

  const removeLastPosition = (player = true) => {
    if (player) {
      playerPositions.pop();
    } else {
      IAPositions.pop();
    }
    checkIfFilledPositions();
  };

  const hasPosition = (element, player = true) => player ? playerPositions.includes(element) : IAPositions.includes(element);

  const hasPositions = (positions, player = true ) => {
    const currentPositions = player ? playerPositions : IAPositions;
    for (let i = 0; i < positions.length; i += 1) {
      if (currentPositions.includes(positions[i])) {
        return true;
      }
    }
    return false;
  };

  const isInvalidPosition = (positions, id, player = true) => {
    let ship = player ? findShip(id, playerShips) : findShip(id, IAShips);
    const currentPositions = player ? playerPositions : IAPositions;
    const currentShipPositions = ship.getPositions();
    for (let i = 0; i < positions.length; i += 1) {
      if (currentPositions.includes(positions[i]) && !(currentShipPositions.includes(positions[i]))) {
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
    getPositions, 
    addPositions, 
    addPosition,
    addShip,
    getShip,
    addShipPositions,
    isInvalidPosition,
    removePosition,
    removeAllShipsPositions,
    removePositions, 
    removeShipPositions,
    resetShipPositions,
    hasPosition, 
    removeLastPosition,
    hasPositions,
  };
})();
