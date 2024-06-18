/** 
 * 94. 二叉树的中序遍历
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
*/

function inorderTraversal(root: TreeNode | null): number[] {
  const res:number[] = [];
  const inorder = (root) => {
    if(!root) return;
    if(root.left) inorder(root.left);
    res.push(root.val);
    if(root.right) inorder(root.right);
  }
  inorder(root);
  return res;
};