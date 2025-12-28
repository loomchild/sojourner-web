export default class Person {
  constructor (data = {}) {
    this.exists = !!data.id
    this.id = data.id
    this.name = data.name
    this.sortName = data.name.toLowerCase().normalize('NFD')
    this.bio = data.bio
    this.events = []
  }

  get firstLetter() {
    return this.sortName[0]
  }

  addEvent (event) {
    this.events.push(event)
  }
}

