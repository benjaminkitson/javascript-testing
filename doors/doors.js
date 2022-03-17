function doors(number) {
  if (typeof number != "number") throw new Error('Argument must be an number.')

  let doorsArr = []

  for (let i = 0; i < number; i++) {
    doorsArr.push(false)
  }

  for (let j = 0; j < number; j++) {

  }



  return doorsArr
}

console.log(doors(5))

module.exports = doors
