class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val; // 节点值
    this.next = null; // 指向下一个节点的引用
  }
}

class MyLinkedList {
  head: ListNode | null;
  size: number;

  constructor() {
    this.head = null; // 链表头节点引用
    this.size = 0; // 链表大小
  }

  // 获取指定索引的节点值
  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;

    let current: ListNode | null = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.val;
  }

  // 在头部添加节点
  addAtHead(val: number): void {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // 在尾部添加节点
  addAtTail(val: number): void {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current: ListNode | null = this.head;
      while (current!.next) {
        current = current!.next;
      }
      current!.next = newNode;
    }
    this.size++;
  }

  // 在指定索引位置添加节点
  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.addAtHead(val);
    } else {
      const newNode = new ListNode(val);
      let current: ListNode | null = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      newNode.next = current!.next;
      current!.next = newNode;
      this.size++;
    }
  }

  // 删除指定索引位置的节点
  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head!.next;
    } else {
      let current: ListNode | null = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      current!.next = current!.next!.next;
    }
    this.size--;
  }
}