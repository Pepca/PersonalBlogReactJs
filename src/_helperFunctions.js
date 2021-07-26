export const transformDateTime = (strDate) => {
  return strDate.split('.').reverse().join('-')
}

export const openPopup = (setState) => {
  const scrollbarWidth = window.innerWidth - document.body.offsetWidth

  document.body.classList.add('_lock')
  document.body.style.paddingRight = `${scrollbarWidth}px`
  document.querySelector(
    '#fixed-element'
  ).style.paddingRight = `${scrollbarWidth}px`

  setState(() => true)
}

export const closePopup = (setState) => {
  document.body.classList.remove('_lock')
  document.body.style.paddingRight = '0'
  document.querySelector('#fixed-element').style.paddingRight = 0

  setState(() => false)
}

export const searching = (first, second, sought) => {
  return (
    first.toUpperCase().search(sought.toUpperCase().trim()) !== -1 ||
    second.toUpperCase().search(sought.toUpperCase().trim()) !== -1
  )
}

export const slicerSting = (str, maxLength) => {
  const strArray = str.split('')

  const strArraySliced = strArray.slice(0, maxLength)

  if (strArraySliced[strArraySliced.length - 1] === ' ') maxLength--

  return `${strArray.slice(0, maxLength).join('')}...`
}

