const crypto = require('crypto');
module.exports = ( { key = '', nonce = '', payload = ''} ) => {
  for (const i of [key, nonce, payload]) {
    if (!i) throw new Error('Key, nonce and payload are required.')
    if (typeof i !== "string") throw new TypeError('Key, nonce and payload must be strings.')
  }
  return crypto.createHmac('sha256', key).update(nonce + payload).digest('hex')
}
