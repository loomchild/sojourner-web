export default class Type {
  constructor (data) {
    this.rawName = data.name
    switch (this.rawName) {
      case 'keynote':
        this.name = 'Keynote'
        break
      case 'maintrack':
        this.name = 'Main track'
        break
      case 'devroom':
        this.name = 'Developer room'
        break
      default:
        this.name = 'Other'
        break
    }
  }
}
