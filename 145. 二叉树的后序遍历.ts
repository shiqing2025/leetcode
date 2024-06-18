/** 
 * 145. 二叉树的后序遍历
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/
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
function postorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    const postorder = (root: TreeNode | null) => {
        if (!root) return;
        postorder(root.left);
        postorder(root.right);
        res.push(root.val);
    }
    postorder(root);
    return res;
}