// Runtime O(n) | O(1) Space
function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity)
}

function validateBstHelper(node, min, max) {
  if (node === null) {
    return true
  } else if (node.value < min || node.value >= max) {
    return false
  } else {
    const left = validateBstHelper(node.left, min, node.value)
    const right = validateBstHelper(node.right, node.value, max)
    return left && right
  }
}