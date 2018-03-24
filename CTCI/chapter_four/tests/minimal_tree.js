/*
 * 4.2 Minimal Tree
 * Given a sorted (increasing order) array with unique
 * integer elements, write an algorithm to create a
 * binary search tree with minimal height. 
 */

/*
 * @params {array} array
 * @return {binary_search_tree}
 */
function minimalTree(array) {
  const mid = Math.floor(array.length / 2)
  let left = mid - 1
  let right = array.length - 1

  while (left >= 0 && right !== mid) {
    
  }
}

module.exports.minimalTree = minimalTree