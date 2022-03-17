function doors(number) {
  if (typeof number != "number") throw new Error('Argument must be an number.')
  return number
}

module.exports = doors
