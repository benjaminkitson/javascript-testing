function doors(number) {
  if (typeof number != "number") throw new Error('Argument must be an number.')

  let doorsArr = []

  for (let i = 1; i <= number; i++) {
    doorsArr.push(false)
  }

  for (let j = 1; j <= number; j++) {
    doorsArr.forEach((door, index) => {
      if ((index + 1) % j === 0) {
        doorsArr[index] = !door
      }
    })
  }

  return doorsArr.filter(door => door === true).length

}

module.exports = doors
