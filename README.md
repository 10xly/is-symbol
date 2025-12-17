# is-symbol primtive

check if value is a symbol primitive

```js
var isSymbol = require('@is-(unknown)/is-symbol')
var assert = require('assert-fn')

assert(isSymbol(Symbol('test')))
assert(isSymbol(Symbol.for('test')))

assert(!isSymbol("test"))
assert(!isSymbol(67))
```