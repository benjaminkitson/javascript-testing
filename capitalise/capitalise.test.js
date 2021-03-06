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

test('returns the original string if the first character is a stringified number', () => {
  expect(capitalise("3 blind mice")).toBe("3 blind mice")
})

test('converts all characters other than the first to lower case', () => {
  expect(capitalise("HeLlO ThERe")).toBe("Hello there")
})

test('detects full stops and works for multiple sentences', () => {
  expect(capitalise('a CoW. a cHicKeN.')).toBe("A cow. A chicken.")
})
