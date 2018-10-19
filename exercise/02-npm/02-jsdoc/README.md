# Document

* https://cdn.rawgit.com/sjkry505/se107a/16345e19/exercise/02-npm/02-jsdoc/docs/-_.html

# Install

```
npm i wyclodash
```

# Example

file : ex1.js

```javascript
const _= require('wyclodash')

console.log('_.difference([2, 1], [2, 3]) =', _.difference([2, 1], [2, 3]))
```

Run

```
> node ex1.js
_.difference([2, 1], [2, 3]) = [ 1 ]
```

file : ex2.js

```javascript
const _ = require('wyclodash')

console.log('_.drop([1, 2, 3]) = ', _.drop([1, 2, 3]))
```

Run

```
> node ex2.js
_.drop([1, 2, 3]) =  [ 2, 3 ]
```

file : ex3.js

```javascript
const _ = require('wyclodash')

console.log('_.flattenDeep([1, [2, [3, [4]], 5]]) = ', _.flattenDeep([1, [2, [3, [4]], 5]]))
```

Run

```
> node ex3.js
_.flattenDeep([1, [2, [3, [4]], 5]]) =  [ 1, 2, 3, 4, 5 ]
```