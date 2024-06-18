/** 
 * 637. 二叉树的层平均值
 * https://leetcode.cn/problems/average-of-levels-in-binary-tree/description/
 * 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。
 * 
 * 示例 1：
 * 输入：[3,9,20,null,15,7]
 * 输出：[3, 14.5, 11]
 * 解释：第 0 层的平均值是 3, 第 1 层是 14.5, 第 2 层是 11
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

// 解法一：层序遍历
// 思路：层序遍历，每次取平均值
function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const count: number = queue.length;  // 添加一个新变量 count 用于存储当前层级节点数量
    let len = count;
    let sum: number = 0;
    while(len > 0) {
      const node = queue.shift()!;
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    res.push(sum / count); // 使用原始的本层数量值（即 count）计算平均值
  }
  return res;
}