/**
 * @jest-environment jsdom
 */

import CountLikes from './CountLikes';

document.body.innerHTML = '<span class="count-comment"></span>';

test('5', () => {
  expect(CountLikes([{}, {}, {}, {}, {}])).toBe(5);
});

test('0', () => {
  expect(CountLikes([])).toBe(0);
});
test('2', () => {
  expect(CountLikes(['1', '2'])).toBe(2);
});