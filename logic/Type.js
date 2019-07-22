export default class Type {
  constructor (data) {
    this.rawName = data.name
    switch (this.rawName) {
      case 'keynote':
        this.name = 'Keynotes'
        this.priority = 1
        this.statName = 'lectures'
        this.background = 'background-1.png'
        this.mobileColor = '#7FDBD399'
        this.desktopColor = '#00E3CF'
        break
      case 'maintrack':
        this.name = 'Main tracks'
        this.priority = 2
        this.statName = 'tracks'
        this.background = 'background-2.png'
        this.mobileColor = '#54BECA99'
        this.desktopColor = '#F7F7F7'
        break
      case 'devroom':
        this.name = 'Developer rooms'
        this.priority = 3
        this.statName = 'rooms'
        this.background = 'background-3.png'
        this.mobileColor = '#96C3C999'
        this.desktopColor = '#00D4EF'
        break
      case 'lightningtalk':
        this.name = 'Lightning talks'
        this.priority = 4
        this.statName = 'talks'
        this.background = 'background-4.png'
        this.mobileColor = '#E0D0BF99'
        this.desktopColor = '#DB8529'
        break
      default:
        this.name = 'Other events'
        this.priority = 9
        this.statName = 'events'
        this.background = 'background-5.png'
        this.mobileColor = '#A18A9D99'
        this.desktopColor = '#D900B4'
        break
    }
  }
}
