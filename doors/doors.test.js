const capitalise = require('./doors');

test('first kata example', () => {
  expect(doors(5).toBe(2))
})

test('second kata example', () => {
  expect(doors(10).toBe(3))
})

test('third kata example', () => {
  expect(doors(100).toBe(10))
})
