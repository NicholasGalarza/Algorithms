// Runtime O(nm) | Space O(1)
function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0)
  ways[0] = 1
  for (const coin of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (coin <= amount) {
        ways[amount] = ways[amount] + ways[amount - coin]
      }
    }
  }
  return ways[n]
}