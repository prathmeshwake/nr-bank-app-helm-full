'use strict'

exports.config = {
  app_name: ['nr-bank-app-helm-full'],
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
  agent_enabled: true,
  distributed_tracing: { enabled: true },
  logging: { level: 'trace' }
}
