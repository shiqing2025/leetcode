/** 
 * 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
 * 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 
*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next);
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null) return head;

  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;

  while(head && head.next){
    // 当前要交换的两个节点
    let firstNode = head;
    let secondNode = head.next;
    
    // 在交换后
    // secondNode 将成为当前节点对的第一个节点
    // firstNode 将成为当前节点对的第二个节点
    prev.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    // 移动指针
    prev = firstNode;
    head = firstNode.next;
  }
  
  return dummy.next;
}