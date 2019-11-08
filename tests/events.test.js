import events from '../src/events'

test('Get valid horizontal positions', () => {
  expect(events.getPositions('cell-1-b', 'horizontal-battleship', 2)).toStrictEqual(['1-c']);
});

test('Get valid vertical positions', () => {
  expect(events.getPositions('cell-1-b', 'vertical-battleship', 5)).toStrictEqual(['2-b','3-b','4-b','5-b']);
});

test('Insert dropped in the middle of a css class', () => {
  expect(events.splitClasses('ship-battleship-0 horizontal-battleship')).toStrictEqual('ship-battleship-0 dropped horizontal-battleship');
});

test('Get size of specific type of ship', () => {
  expect(events.getSize('destroyer-0')).toBe(2);
});