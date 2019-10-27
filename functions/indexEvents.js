module.exports = function indexEvents (events) {
  const index = {}
  for (let event of events) {
    const blob = JSON.stringify(event, null, 2).toLowerCase()
      .replace(/"[a-zA-Z0-9_]+":|/g, '').replace(/",|"|/g, '')
    index[event.id] = blob
  }

  return index
}
