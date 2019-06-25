export default class Type {
  constructor (data) {
    this.rawName = data.name
    switch (this.rawName) {
      case 'keynote':
        this.name = 'Keynotes'
        this.priority = 1
        this.statName = 'lectures'
        this.background = 'background-1.png'
        break
      case 'maintrack':
        this.name = 'Main tracks'
        this.priority = 2
        this.statName = 'tracks'
        this.background = 'background-2.png'
        break
      case 'devroom':
        this.name = 'Developer rooms'
        this.priority = 3
        this.statName = 'rooms'
        this.background = 'background-3.png'
        break
      case 'lightningtalk':
        this.name = 'Lightning talks'
        this.priority = 4
        this.statName = 'talks'
        this.background = 'background-4.png'
        break
      default:
        this.name = 'Other events'
        this.priority = 9
        this.statName = 'events'
        this.background = 'background-5.png'
        break
    }
  }
}
