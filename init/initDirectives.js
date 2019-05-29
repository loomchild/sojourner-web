import Vue from 'vue'

Vue.directive('go', function (el, binding, vnode) {
  el.addEventListener('click', () => {
    setTimeout(() => vnode.context.$router.push(binding.value), 150)
  })
})

export default function () {}
