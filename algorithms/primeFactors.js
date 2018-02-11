/*
  A JavaScript module which returns prime factors of the input integer.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: Minko Gechev, "javascript-algorithms", https://github.com/mgechev/javascript-algorithms, https://github.com/mgechev/javascript-algorithms/blob/master/src/primes/prime-factor-tree.js
*/

'use strict'

module.exports = (n = 0, a = [], s = 6) => {
  n = Math.abs(n)
  while (n > 1 && n % 2 === 0) n = addFactor(n, a, 2)
  while (n > 2 && n % 3 === 0) n = addFactor(n, a, 3)
  while (n > 4) {
    let p = s - 1
    let q = s + 1
    while (n > 4 && n % p === 0) n = addFactor(n, a, p)
    while (n > 4 && n % q === 0) n = addFactor(n, a, q)
    s += 6
  }
  return a
}

const addFactor = (n = 0, a = [], n2 = 1) => {
  a.push(n2)
  return (n /= n2)
}
