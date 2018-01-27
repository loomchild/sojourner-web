if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service worker registered successfully'))
      .catch(error => console.log(`Error registering service worker: ${error}`))
  })
}

export default {}
