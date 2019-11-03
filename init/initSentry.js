import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

export default async function () {
  if (process.env.SENTRY_DSN) {
    // Workaround for https://github.com/vuejs/vue/issues/8433
    Vue.config.errorHandler = (err, vm, info) => {
      console.error(err)
    }

    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      integrations: [new Integrations.Vue({Vue})]
    })

    console.log('Sentry initialized')
  }
}
