/** 
 * 117. 填充每个节点的下一个右侧节点指针 II
 * https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/description/
 * 
 * 给定一个二叉树：
 * struct Node {
 *  int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * }
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。
 * 如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
*/
class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}
//注意：没有显式地将 node.next 设置为 null，因为在定义 Node 类时，我们已经将 next 指针的默认值设置为 null：

// 解法一：层序遍历
// 思路：层序遍历，每次取每一层的节点值
function connect(root: Node | null): Node | null {
  if (!root) return null;

  const queue: Node[] = [root];

  while (queue.length) {
    const len = queue.length;
    let prev: Node | null = null;

    for (let i = 0; i < len; i++) {
      const node = queue.shift()!; // 队首出队

      if (prev) prev.next = node; // 注意这里是 prev.next，即上一个节点的 next 指向当前节点
      prev = node;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
}