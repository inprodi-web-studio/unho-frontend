
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./inprodi-design-system.cjs.production.min.js')
} else {
  module.exports = require('./inprodi-design-system.cjs.development.js')
}
