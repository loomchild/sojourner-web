import colorsys from 'colorsys'
import md5 from 'blueimp-md5'
import memoize from 'memoizee'

const calculateColor = memoize((name) => {
  const hash = md5(name)
  const h = parseInt(hash.substring(0, 4), 16) * 360.0 / 65536.0
  const color = colorsys.hsvToHex(h, 90, 90)
  return color
})

export default class Track {
  constructor (name) {
    this.name = name
    this.color = calculateColor(this.name)
  }
}
