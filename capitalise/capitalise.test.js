const capitalise = require('./capitalise');

test('returns a string', () => {
  expect((typeof capitalise("hello"))).toBe('string')
});

test('only accepts a string as an argument', () => {
  expect(capitalise(10)).toBe('Argument must be a string.')
})

test('capitalises the first letter of the argument string', () => {
  expect(capitalise("hello")).toBe('Hello')
})

test('it should return the original string if the first character is a stringified number', () => {
  expect(capitalise("3 blind mice")).toBe("3 blind mice")
})
