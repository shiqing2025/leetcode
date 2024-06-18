/** 
 * 429. N 叉树的层序遍历
 * https://leetcode.cn/problems/n-ary-tree-level-order-traversal/description/
 * 
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
 * 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
*/
class _Node {
  val: number
  children: _Node[]
  constructor(val?: number, children?: _Node[]) {
    this.val = (val === undefined ? 0 : val)
    this.children = (children === undefined ? [] : children)
  }
}

// 解法一：层序遍历
// 思路：层序遍历，每次取每一层的节点值
function levelOrder(root: _Node | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];
  const queue: _Node[] = [root];

  while (queue.length) {
    let len: number = queue.length;
    const levelArr: number[] = [];
    while (len > 0) {
      const node = queue.shift()!; // 注意这里是 shift，即取队列头部元素
      levelArr.push(node.val);
      if (node.children) queue.push(...node.children); // 注意这里是将所有子节点全部放入队列 queue 中
      len--;
    }
    res.push(levelArr);
  }
  return res;
};