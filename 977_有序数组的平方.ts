/** 
 * 977. 有序数组的平方
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，
 * 要求也按 非递减顺序 排序。
 * 
*/

function sortedSquares(nums: number[]): number[] {
  let len = nums.length;
  const arr = new Array(len);

  let left = 0;
  let right = len - 1;
  while (len >= 0 && left <=right) {
    len--;
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      arr[len] = Math.pow(nums[left], 2);
      left++;
    } else {
      arr[len] = Math.pow(nums[right], 2);
      right--
    }
  }
  console.log(arr)
  return arr;
};

const nums = [-7, -3, 2, 3, 11]
sortedSquares(nums)