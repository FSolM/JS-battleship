import ship from '../../src/ships/ship'

test('Ship initial values', () => {
  const testShip = ship('cruiser-1', 'cruiser', 4)
  testShip.addPosition('1-a');
  expect(testShip.getPositions()).toStrictEqual(['1-a']);
  expect(testShip.getID()).toStrictEqual('cruiser-1');
  expect(testShip.getSize()).toStrictEqual(4);
  expect(testShip.getType()).toStrictEqual('cruiser');
});

test('Ship override positions', () => {
  const testShip = ship('cruiser-1', 'cruiser', 4)
  testShip.addPosition('1-a');
  testShip.addPosition('2-a');
  expect(testShip.overridePositions(['1-b','1-c'])).toStrictEqual(['2-a']);
});

test('Ship reset positions', () => {
  const testShip = ship('cruiser-1', 'cruiser', 4)
  testShip.addPosition('1-a');
  testShip.addPosition('2-a');
  expect(testShip.resetPositions()).toStrictEqual(['1-a','2-a']);
});

test('If ship is sunk', () => {
  const testShip = ship('cruiser-1', 'cruiser', 4)
  testShip.addPosition('1-a');
  testShip.addPosition('2-a');
  testShip.addPosition('3-a');

  testShip.hit('2-a');
  testShip.hit('3-a');
  expect(testShip.hit('1-a')).toStrictEqual(['1-a', '2-a', '3-a']);
});