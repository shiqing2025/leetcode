/** 
 * 515. 在每个树行中找最大值
 * https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
 * 
 * 示例1：
 * 输入: root = [1,3,2,5,3,null,9]
 * 输出: [1,3,9]
*/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode, right?: TreeNode) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

// 方法一：层序遍历
function largestValues(root: TreeNode | null): number[] {
  if (!root) return []
  let res: number[] = []
  let queue: TreeNode[] = [root]
  while (queue.length) {
    let len = queue.length
    let max = -Infinity
    while (len > 0) {
      let node = queue.shift()!
      if (node.val > max) {
        max = node.val
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len--
    }
    res.push(max)
  }
  return res
};