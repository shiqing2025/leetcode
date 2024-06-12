/** 
 * 18. 四数之和
 * https://leetcode.cn/problems/4sum/description/
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
 * 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] ： 
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 你可以按 任意顺序 返回答案。
 * 
 * 示例 1：
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/

function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    const n = nums.length;

    // Helper function to find threeSum
    const threeSum = (start: number, target: number): void => {
        for (let i = start; i < n - 2; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            let left = i + 1;
            let right = n - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[start - 1], nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    };

    // Main loop to find fourSum
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        threeSum(i + 1, target - nums[i]);
    }

    return result;
}