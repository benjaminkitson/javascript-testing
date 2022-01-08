function humanTime(secs) {
  if (typeof secs != 'number') return "Numbers only please!"

  let remainingSeconds = secs;

  const hours = Math.floor(secs / 3600);
  let hoursText

  if (hours === 0) {
    hoursText = ''
  } else {
    hoursText = (hours === 1) ? `${hours} hour, ` : `${hours} hours, `
  }

  remainingSeconds %= 3600;

  const minutes = Math.floor(remainingSeconds / 60);
  let minutesText;

  if (minutes === 0) {
    minutesText = ''
  } else {
    minutesText = (minutes === 1) ? `${minutes} minute, ` : `${minutes} minutes, `
  }

  remainingSeconds %= 60;

  const seconds = remainingSeconds;
  let secondsText;

  if (seconds === 0) {
    secondsText = ''
  } else {
    secondsText = (seconds === 1) ? `${seconds} second` : `${seconds} seconds`
  }

  return `${hoursText}${minutesText}${secondsText}`
}

console.log(humanTime(10000))

module.exports = humanTime;
