const sorts = require('./sorts');

test('returns an array when a non-empty array is provided', () => {
  expect(sorts([1])).toBe([1])
});

test('returns an error message otherwise', () => {
  expect(sorts("hello")).toBe("I can only sort an array!")
});

test('specifically returns "Nothing to sort!" if an empty array is provided'), () => {
  expect(sorts([])).toBe("Nothing to sort!")
}

test('returns a sorted array when an array of length 2 is provided'), () => {
  expect(sorts([2,1])).toBe([1,2])
}
