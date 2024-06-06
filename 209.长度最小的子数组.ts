/** 
 * 209.长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 target.
 * 找出该数组中满足其总和大于等于 target 的长度最小的 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0
 * 
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * */

function minSubArrayLen(target: number, nums: number[]): number {
  // 滑动窗口
  let minLen = Infinity;
  let left = 0;
  let currSum = 0;

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];

    while (currSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      currSum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

const nums = [1, 2, 3, 4, 5];
const target = 11;
console.log(minSubArrayLen(target, nums)); // 3