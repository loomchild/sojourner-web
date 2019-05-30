export default class Type {
  constructor (data) {
    this.rawName = data.name
    switch (this.rawName) {
      case 'keynote':
        this.name = 'Keynotes'
        break
      case 'maintrack':
        this.name = 'Main tracks'
        break
      case 'devroom':
        this.name = 'Developer rooms'
        break
      default:
        this.name = 'Other events'
        break
    }
  }
}
