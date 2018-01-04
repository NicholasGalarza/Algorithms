/* Two Number Sum
 * Goal
 * Write a function that takes in a non-empty 
 * array of distinct integers and an integer 
 * representing a target sum. If any two numbers 
 * in the input array sum up to the target sum, 
 * the function should return them in an array, 
 * in sorted order. If no two numbers sum up 
 * to the target sum, the function should return
 *  an empty array. Assume that there will be at 
 * most one pair of numbers summing up to the 
 * target sum.
 * 
 * Also, the sent in array will have unique values
 * only.
 */


/* Brute Force Solution
 * O(n^2)
 * Explanation: 
 * Iterate through each element in the 
 * array and subtract each element from the targetSum
 * to determine if the difference exists in the array.
 * The inner loop will determine if the difference exists
 * and short-circuit if the needed value is found. 
 */
// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length; i++) {
//     let find = targetSum - array[i]
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] === find && i !== j)
//         return (find < array[j]) ? [find, array[j]] : [array[j], find]
//     }
//   }
//   return []
// }

/* Optimizied Solution
 * O(2n) -> O(n)
 * Explanation: 
 * Construct a hash table mapping each key which is every 
 * element in the array to its index position in the array.
 * I prefer to setup in this manner because setting up a hashmap 
 * may need different implementations therefore, this is the more
 * modular approach.
 */
function twoNumberSum(array, targetSum) {
  // Construct hashmap with values mapped to location in array.
  let hashM = array.reduce((hMap, value, loc) => {
    hMap[value] = loc
    return hMap
  }, {})

  // Iterate through hashmap and return the key/missing value in ascending order.
  for (let key in hashM) {
    let need = targetSum - key
    if (hashM.hasOwnProperty(need) && +key !== need) {
      return (+key < need) ? [+key, need] : [need, +key]
    }
  }
  return []
}

console.log(twoNumberSum([4, 6, 1, -3], 3)) // should equal [-3, 6]
console.log(twoNumberSum([3, 3, 2, 2, 7], 9)) // should return [2, 7]