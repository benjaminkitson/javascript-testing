const sorts = require('./sorts');

test('returns an array when a non-empty array is provided', () => {
  expect(sorts([1])).toStrictEqual([1])
});

test('returns an error message otherwise', () => {
  expect(sorts("hello")).toStrictEqual("I can only sort an array!")
});

test('specifically returns "Nothing to sort!" if an empty array is provided', () => {
  expect(sorts([])).toStrictEqual("Nothing to sort!")
})

test('returns a sorted array when an array of length 2 is provided', () => {
  expect(sorts([2,1])).toStrictEqual([1,2])
})

test('returns a sorted array when any array of integers is passed to it', () => {
  expect(sorts([3,6,1,2,5,4,9,7,8])).toStrictEqual([1,2,3,4,5,6,7,8,9])
})

test('should ignore any empty items', () => {
  expect(sorts([5, 6, 8, 1, 4, 2, 6, , 1, 6, 8, 3, , 2, 4, 2, 6, , 3, 6, 2, 5, , 3, 6, 2, , 4])).toStrictEqual([1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 8, 8])
})
