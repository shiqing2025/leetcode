/** 
 * 27. 移除元素
 * https://leetcode.cn/problems/remove-element/description/
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。
 * 假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：
 * 更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
 * 返回 k
*/

/** 
 * 方案1: 一个指针 + count计数器
 * 使用一个指针来遍历数组，并使用一个计数器来计算非 val 元素的数量。
 *  当遇到非 val 元素时，将其移动到数组前面的位置，并增加计数器。最后，计数器的值就是新的数组长度
 * 
 * 注： 这里的count计数器其实就相当于快慢指针里的慢指针，另一个指针用来遍历整个数组
 */ 
function removeElement1(nums: number[], val: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};
/** 
 * 方案2：快慢指针
 * 使用快慢指针解决这个问题的关键是让慢指针指向已处理的非 val 元素的最后一个位置，
 * 而快指针则用于遍历整个数组。
 * 当快指针遇到非 val 元素时，将其移动到慢指针的下一个位置，并更新慢指针。
 * 最后，慢指针的值就是新的数组长度。
 */
function removeElement(nums: number[], val: number): number {
  let slow = 0;
  let fast = 0;
  while(fast < nums.length){
    if(nums[fast] !== val){
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};

