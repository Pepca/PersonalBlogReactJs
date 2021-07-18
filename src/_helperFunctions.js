export const transformDateTime = (strDate) => {
  const dateTime = strDate.split('.').reverse().join('-')
  return dateTime
}

export const searching = (first, second, sougth) => {
  return (
    first.toUpperCase().search(sougth.toUpperCase().trim()) !== -1 ||
    second.toUpperCase().search(sougth.toUpperCase().trim()) !== -1
  )
}

export const slicerSting = (str, maxLength) => {
  const strArray = str.split('')

  const strArraySliced = strArray.slice(0, maxLength)

  if (strArraySliced[strArraySliced.length - 1] === ' ') maxLength--

  return `${strArray.slice(0, maxLength).join('')}...`
}

const fixNumber = (number) => {
  return number < 10 ? `0${number}` : `${number}`
}

export const formatTime = (seconds) => {
  return `${Math.floor(seconds / 60)}:${fixNumber(Math.floor(seconds % 60))}`
}
