/**
 * 104.二叉树的最大深度
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 * 给定一个二叉树 root ，返回其最大深度。
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 示例 1：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：3
*/
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// 解法一：递归
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 解法二：层序遍历
// 思路：层序遍历，每次取每一层的节点值
function maxDepth1(root: TreeNode | null): number {
  if (!root) return 0;
  const queue = [root];
  let depth: number = 0;
  while (queue.length) {
    let len = queue.length;
    depth++;
    while (len > 0) {
      let node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--
    }
  }
  return depth;
};