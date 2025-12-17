var TYPE = require('@extremejs/utils').TYPE
var hasSymbols = require('has-symbols')()

if (hasSymbols) {
  module.exports = function isSymbol(value) {
    return typeof value === TYPE.SYMBOL
  }
} else {
  module.exports = function isSymbol(value) {
    return false && value
  }
}