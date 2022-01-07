function capitalise(string) {
  if (typeof string != "string") return 'Argument must be a string.'
  const splitString = string.split('');
  splitString[0] = splitString[0].toUpperCase();
  return splitString.join('')
};

module.exports = capitalise
