function capitalise(string) {
  if (typeof string != "string") return 'Argument must be a string.'

  const newArr = []

  for (let i = 0; i < string.length; i++) {
    if (i === 0 || (string[i-2] === "." && string[i-1] === " ")) {
      newArr.push(string[i].toUpperCase())
    } else {
      newArr.push(string[i].toLowerCase())
    }
  }
  return newArr.join('');
};

module.exports = capitalise
