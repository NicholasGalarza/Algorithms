/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = t => {
  if (t == null) return ""

  let result = t.val + ""

  const left = (t.left) ? tree2str(t.left) : null,
    right = (t.right) ? tree2str(t.right) : null

  if (left && right) result += "(" + left + ")(" + right + ")";
  else if (right) result += "()(" + right + ")";
  else if (left) result += "(" + left + ")";
  return result;
};