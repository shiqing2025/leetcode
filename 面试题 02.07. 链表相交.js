/** 
 * 面试题 02.07. 链表相交
 * https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/description/
 * 
 * 当两个链表长度不一致时，较短的链表的指针先行走到末尾，然后跳到另一个链表的头部继续行走；
 * 较长的链表的指针后行走到末尾，然后跳到另一个链表的头部继续行走。
 * 这样，两个指针都将走过 a + b 的长度。如果两个链表有交点，那么两个指针一定会在交点处相遇；
 * 如果没有交点，那么两个指针会在走过 a + b 的长度后同时为 null，此时 while 循环退出，函数返回 null。
 * 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return pA;
};