const doors = require('./doors');

test('it should only accept an integer argument', () => {
  expect((typeof (doors(1)))).toBe('integer')
});

test('it should return an integer', () => {
  expect((typeof (doors(1)))).toBe('integer')
});

test('first kata example', () => {
  expect(doors(5).toBe(2))
});

test('second kata example', () => {
  expect(doors(10).toBe(3))
});

test('third kata example', () => {
  expect(doors(100).toBe(10))
});
