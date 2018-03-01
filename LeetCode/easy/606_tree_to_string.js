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

  const left = tree2str(t.left),
    right = tree2str(t.right)

  if (left == "" && right == "") return result
  if (left == "") return result + "()" + "(" + right + ")"
  if (right == "") return result + "(" + left + ")"
  return result + "(" + left + ")" + "(" + right + ")"
};