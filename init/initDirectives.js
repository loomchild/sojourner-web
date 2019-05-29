import Vue from 'vue'

Vue.directive('go', function (el, binding, vnode) {
  console.log(binding)
  el.addEventListener('click', () => {
    setTimeout(() => vnode.context.$router.push(binding.value), 150)
  })
})

export default function () {}
