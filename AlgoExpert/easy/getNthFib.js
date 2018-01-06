/* Fibonacci Sequence 
 * Return the nth value of the fib sequence. 
 */

// Runtine: O(2^n) | O(1) space
// function getNthFib(n) {
// 	if (n <= 1) return 0
// 	else if (n === 2) return 1
// 	else return getNthFib(n-1) + getNthFib(n-2)
// }

// Runtine: O(n) | O(n) space
function getNthFib(n, cache = {}) {
	cache[1] = 0
	cache[2] = 1
	
	if (n in cache) return cache[n]
	else {
		cache[n] = getNthFib(n-1) + getNthFib(n-2)
		return cache[n]
	}
}