/**
 * 19. 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 快慢指针 快指针先走 n+1 步， 然后一起走
    // 待快指针指向 null 时，慢指针在待删除节点的前面
    if (!head) return null;

    let dummy = new ListNode(0, head);
    let fastNode = dummy;
    let slowNode = dummy;

    let fastStep = n + 1;
    while (fastStep) {
      if (fastNode !== null) {
        fastNode = fastNode.next!;
      }
      fastStep--
    }
    while (fastNode) {
      fastNode = fastNode.next!;
      slowNode = slowNode.next!;
    }
    slowNode.next = slowNode.next!.next;

    return dummy.next;
  };
};