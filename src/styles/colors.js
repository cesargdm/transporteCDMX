const colorConstants = {
  accent: '#2B45AC',
  background: '#EDEDED',
  black: '#000',
  blackOpacity: hexToRgbA('#000', 0.5),
  danger: '#FF4D4D',
  lightGray: '#E5E5E5',
  mediumGray: '#A1A1A1',
  primary: '#FFF',
  primaryOpacity: hexToRgbA('#FFF', 0.5),
  secondary: '#2B45AC',
  success: '#4e9f41',
  warning: '#FFCA45',
  white: '#FFF',
}

const bgColors = {
  bgBlack: { backgroundColor: colorConstants.black },
  bgBlackOpacity: { backgroundColor: colorConstants.blackOpacity },
  bgPrimary: { backgroundColor: colorConstants.primary },
  bgPrimaryOpacity: { backgroundColor: colorConstants.primaryOpacity },
  bgSecondary: { backgroundColor: colorConstants.secondary },
  bgLightGray: { backgroundColor: colorConstants.lightGray },
  bgDanger: { backgroundColor: colorConstants.danger },
  bgWhite: { backgroundColor: colorConstants.white },
  bgBackground: { backgroundColor: colorConstants.background },
}

const fontColors = {
  colorPrimary: { color: colorConstants.primary },
  colorPrimaryOpacity: { color: colorConstants.primaryOpacity },
  colorSecondary: { color: colorConstants.secondary },
  colorMediumGray: { color: colorConstants.mediumGray },
  colorDanger: { color: colorConstants.danger },
  colorWhite: { color: colorConstants.white },
}

const colors = {
  ...colorConstants,
  ...bgColors,
  ...fontColors,
}

function hexToRgbA(hex, opacity) {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `0x${c.join('')}`
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`
  }
  return '#FFF'
}

export { colors }
