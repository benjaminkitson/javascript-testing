const humanTime = require('./human_time.test.js')

test('return error message unless a number is provided', () => {
  expect(humanTime("hello")).toBe("Numbers only please!")
});

test('returns a string when a number is provided', () => {
  expect(typeof (humanTime(1))).toBe('string')
});

test('returns the number of seconds when below 60 seconds', () => {
  expect(humanTime(59)).toBe('59 seconds')
})

test('returns minutes and seconds when less than 60 minutes', () => {
  expect(humanTime(65)).toBe('1 minute, 5 seconds')
})

test('returns hours, minutes and seconds when', () => {
  expect(humanTime(3665)).toBe('1 hour, 1 minute, 5 seconds')
})
