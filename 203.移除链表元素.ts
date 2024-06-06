/** 
 * 203. 移除链表元素
 * https://leetcode.cn/problems/remove-linked-list-elements/description/
 * 题意：删除链表中等于给定值 val 的所有节点。
 * 示例 1： 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]
 * 示例 2： 输入：head = [], val = 1 输出：[]
 * 示例 3： 输入：head = [7,7,7,7], val = 7 输出：[]
*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head && head.val === val) {
    head = head.next;
  }
  if (!head) return null;

  let cur = head;
  while (cur.next) {
    if (cur.next.val !== val) {
      cur = cur.next;
    } else {
      cur.next = cur.next.next;
    }
  }
  return head;
};

