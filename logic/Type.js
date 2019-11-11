export default class Type {
  constructor (data) {
    this.id = data.id
    this.priority = data.priority
    this.name = data.name
    this.statName = data.statName
    switch (this.priority) {
      case 0:
        this.background = 'background-1-alt.png'
        this.mobileColor = '#7FDBD399'
        this.desktopColor = '#00E3CF'
        this.arrowColor = this.desktopColor
        break
      case 1:
        this.background = 'background-2-alt.png'
        this.mobileColor = '#54BECA99'
        this.desktopColor = '#F7F7F7'
        this.arrowColor = '#54BECA'
        break
      case 2:
        this.background = 'background-3-alt.png'
        this.mobileColor = '#96C3C999'
        this.desktopColor = '#00D4EF'
        this.arrowColor = this.desktopColor
        break
      case 3:
        this.background = 'background-4-alt.png'
        this.mobileColor = '#E0D0BF99'
        this.desktopColor = '#DB8529'
        this.arrowColor = this.desktopColor
        break
      default:
        this.background = 'background-5-alt.png'
        this.mobileColor = '#A18A9D99'
        this.desktopColor = '#D900B4'
        this.arrowColor = this.desktopColor
        break
    }
  }
}
