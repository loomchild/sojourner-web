function updateVh () {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export default function () {
  // Fix height, see also App.vue style
  // See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  updateVh()

  window.addEventListener('resize', updateVh)
}
