const doors = require('./doors');

test('it should only accept a number as an argument', () => {
  expect(typeof (doors(1))).toBe('number')
});

test('it should return a number', () => {
  expect(typeof (doors(1))).toBe('number')
});

test('first kata example', () => {
  expect(doors(5)).toBe(2)
});

test('second kata example', () => {
  expect(doors(10)).toBe(3)
});

test('third kata example', () => {
  expect(doors(100)).toBe(10)
});
