const multiparty = require('connect-multiparty');
const path = require('../config/path');

const middlewareMultiparty = multiparty({ uploadDir: path.mp3Path });

module.exports = middlewareMultiparty;