export default class Person {
  constructor (data = {}) {
    this.exists = !!data.id
    this.id = data.id
    this.name = data.name
    this.bio = data.bio
    this.events = []
  }

  addEvent (event) {
    this.events.push(event)
  }
}

