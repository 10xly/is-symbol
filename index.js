var TYPE = require('@extremejs/utils').TYPE
var hasSymbols = require('has-symbols')()
var type = require("es-typeof")

if (hasSymbols) {
  module.exports = function isSymbol(value) {
    return type(value) === TYPE.SYMBOL
  }
} else {
  module.exports =require("false-value")
}