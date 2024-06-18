/** 
 * 102. 二叉树的层序遍历
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * 
 * 示例 1：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
*/

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
// 思路：递归遍历每一层的节点，将每一层的节点值存入数组
function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const dfs = (node: TreeNode | null, level: number) => {
    if (!node) return;
    if (!res[level]) res[level] = []; // 如果当前层不存在，则创建一个空数组 
    res[level].push(node.val); // 将当前节点值存入当前层
    dfs(node.left, level + 1); // 递归遍历左子树
    dfs(node.right, level + 1); // 递归遍历右子树
  }
  dfs(root, 0);
  return res;
};

// 解法二：迭代
// 思路：使用队列，每次遍历一层的节点，将下一层的节点存入队列
function levelOrder2(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res: number[][] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const curArr: number[] = [];
    let len: number = queue.length;
    while (len > 0) {
      const node = queue.pop() as TreeNode;
      curArr.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
      len--;
    }
    res.push(curArr);
  }
  return res;
};