import { getBorderClass } from '../../src/board/boardRender'

test('Return the appropiate border', () => {
  expect(getBorderClass(0, 0, 10)).toBe('first-border');
  expect(getBorderClass(6, 6, 10)).toBe('inner-border');
  expect(getBorderClass(9, 0, 10)).toBe('bottom-right-border');
});