// Runtime O(nm) | O(n) Space
function minNumberOfCoinsForChange(n, denoms) {
  // Store
  const ways = new Array(n + 1).fill(Infinity)
  // Base Case
  ways[0] = 0
  // Components
  for (const coin of denoms) {
    for (let idx = 1; idx < n + 1; idx++) {
      if (coin <= idx) {
        ways[idx] = Math.min(ways[idx], ways[idx - coin] + 1)
      }
    }
  }

  return ways[n] !== Infinity ? ways[n] : -1
}