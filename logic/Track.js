import Type from './Type'

export default class Track {
  constructor (data) {
    this.name = data.name
    this.type = data.type || new Type()
  }
}
