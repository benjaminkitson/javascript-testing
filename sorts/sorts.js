function sorts(array) {
  if (!Array.isArray(array)) {
    return "I can only sort an array!"
  } else if (array.length === 0) {
    return "Nothing to sort!"
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] < array[i-1]) {

    }
  }
  return array
}

module.exports = sorts;
