/* Given a BST structure called tree, and a target value, find 
 * the closest value in the tree relative to the target.
 */

 // Average: runtime O(log(n)) | O(1) space
 // Worst:  runtime O(n) | O(1) space
function findClosestValueInBst(tree, target, closest = Infinity) {

  let current = tree,
    difference = Math.abs(current.value - target),
    path = (target < current.value) ? 'left' : 'right',
    child = current[path]

  closest = (difference < Math.abs(closest - target)) ? current.value : closest

  if (child) {
    return findClosestValueInBst(child, target, closest)
  } else {
    return closest
  }
}