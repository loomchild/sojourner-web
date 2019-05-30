import Vue from 'vue'

function addGoDirective (el, binding, vnode) {
  const handler = () => {
    setTimeout(() => vnode.context.$router.push(binding.value), 150)
  }

  el.addEventListener('click', handler)
  el.$goCleanup = () => el.removeEventListener('click', handler)
}

function removeGoDirective (el) {
  el.$goCleanup()
}

function updateGoDirective (el, binding, vnode) {
  removeGoDirective(el)
  addGoDirective(el, binding, vnode)
}

Vue.directive('go', {
  bind: addGoDirective,
  update: updateGoDirective,
  unbind: removeGoDirective
})

export default function () {}
