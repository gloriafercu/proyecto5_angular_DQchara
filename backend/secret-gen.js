const crypto = require('crypto')
const secret = crypto.randomBytes(32).toString('hex'); // 32 bytes = 256 bits
console.log(secret);
