/** 
 * 232.用栈实现队列
 * https://leetcode.cn/problems/implement-queue-using-stacks/description/
 * 使用栈实现队列的下列操作：
 * push(x) -- 将一个元素放入队列的尾部。
 * pop() -- 从队列首部移除元素。
 * peek() -- 返回队列首部的元素。
 * empty() -- 返回队列是否为空。
 * 
 * 说明：
 * 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
 * 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 * 
 * 进阶：
 * 你能否实现每个操作均摊时间复杂度为 O(1) 的队列？
 * 换句话说，执行 n 个操作的总时间复杂度为 O(n)，即使其中一个操作可能花费较长时间。
 * 
 * 提示：
 * 1 <= x <= 9
 * 最多调用 100 次 push、pop、peek 和 empty
 * 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）
 * 
 * 思路：
 * 用两个栈实现队列
 * 一个栈 stack1 用于入队操作，一个栈 stack2 用于出队操作
 * 入队时，直接将元素压入 stack1
 * 出队时，如果 stack2 为空，则将 stack1 的所有元素弹出并压入 stack2，然后 stack2 出栈；如果 stack2 不为空，则直接 stack2 出栈
 * peek 操作与出队操作类似，只是不弹出元素
 * empty 操作只需判断 stack1 和 stack2 是否为空即可
 * 
 * 时间复杂度：
 * push 操作的时间复杂度为 O(1)
 * pop 和 peek 操作的时间复杂度均为 O(1)（均摊时间复杂度）
 * empty 操作的时间复杂度为 O(1)
 * 
 * 空间复杂度：
 * O(n)，其中 n 为队列的元素个数
 * 
*/