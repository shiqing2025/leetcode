/** 
 * 110.平衡二叉树
 * https://leetcode.cn/problems/balanced-binary-tree/description/
*/
function isBalanced(root: TreeNode | null): boolean {
  let isBalancedFlag = true;
  depth(root);
  return isBalancedFlag;

  function depth(node: TreeNode | null): number {
    if (node === null) return 0;
    let left = depth(node.left);
    let right = depth(node.right);
    if (Math.abs(left - right) > 1) {
      isBalancedFlag = false;
    }
    return Math.max(left, right) + 1;
  }
};