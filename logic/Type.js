export default class Type {
  constructor (data) {
    this.rawName = data.name
    switch (this.rawName) {
      case 'keynote':
        this.name = 'Keynotes'
        this.priority = 1
        this.statName = 'lectures'
        break
      case 'maintrack':
        this.name = 'Main tracks'
        this.priority = 2
        this.statName = 'tracks'
        break
      case 'devroom':
        this.name = 'Developer rooms'
        this.priority = 3
        this.statName = 'rooms'
        break
      case 'lightningtalk':
        this.name = 'Lightning talks'
        this.priority = 4
        this.statName = 'talks'
        break
      default:
        this.name = 'Other events'
        this.priority = 9
        this.statName = 'events'
        break
    }
  }
}
