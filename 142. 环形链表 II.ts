
/** 
 * 142. 环形链表 II
 * https://leetcode.cn/problems/linked-list-cycle-ii/description/
 * 思路：
 * 通过快慢指针相遇原理，可以判断链表中是否存在环；
 * 通过环入口定位原理，可以找到链表中环的入口；
 * 
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return null;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let entry: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) { // 快慢指针在环中相遇
      while(slow !== entry) { // 一个指针从head处出发，慢指针从当前相遇点出发 则会在环入口处相遇
        slow = slow!.next;
        entry = entry!.next;
      }
      return entry;
    }
  }

  return null; // There is no cycle
}