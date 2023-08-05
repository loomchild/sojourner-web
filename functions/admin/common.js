const { createHash } = require('crypto')

function hashUid (uid) {
  return createHash('sha256').update(uid).digest('hex')
}

module.exports = { hashUid }
