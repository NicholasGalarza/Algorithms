// Runtime O(n) | O(n) Space
function maxSubsetSumNoAdjacent(array) {
 
	if (array.length === 0) return 0
	else if (array.length === 1) return array[0]
	
	let perElementSum = [array[0]], 
		currentMaxSum = 0
	
	perElementSum[1] = Math.max(array[0], array[1])
	
	for (let i = 2; i < array.length; i++) {
		currentMaxSum = Math.max(perElementSum[i-1], perElementSum[i-2] + array[i])
		perElementSum.push(currentMaxSum)
	}
	
	return perElementSum[perElementSum.length-1]
}