function sorts(array) {
  if (!Array.isArray(array)) {
    return "I can only sort an array!"
  } else if (array.length === 0) {
    return "Nothing to sort!"
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i - 1] === undefined && i != 0) array.splice(i-1, 1)

    if (array[i] < array[i-1]) {
      const toMove = array.splice(i,1);
      array.unshift(toMove[0]);
      i+=2
    }
  }
  return array
}


module.exports = sorts;
