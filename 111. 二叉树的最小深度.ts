/** 
 * 111. 二叉树的最小深度
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点
 * 
 * 示例 1：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
*/
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// 解法一：递归
function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let min = Number.MAX_SAFE_INTEGER;
  if (root.left) min = Math.min(min, minDepth(root.left));
  if (root.right) min = Math.min(min, minDepth(root.right));
  return min + 1;
}

// 解法二：层序遍历
// 思路：层序遍历，每次取每一层的节点值
function minDepth1(root: TreeNode | null): number {
  if (!root) return 0;
  const queue = [root];
  let depth: number = 0;
  while (queue.length) {
    let len = queue.length;
    depth++;
    while (len > 0) {
      let node = queue.shift()!;
      if (!node.left && !node.right) return depth; // 当前节点是叶子节点，直接返回
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
  }
  return depth;
}