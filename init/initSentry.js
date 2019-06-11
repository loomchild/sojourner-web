import config from '@/config'
import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

export default async function () {
  if (config.sentryDsn) {
    // Workaround for https://github.com/vuejs/vue/issues/8433
    Vue.config.errorHandler = (err, vm, info) => {
      console.error(err)
    }

    Sentry.init({
      dsn: config.sentryDsn,
      integrations: [new Integrations.Vue({Vue})]
    })

    console.log('Sentry initialized')
  }
}
