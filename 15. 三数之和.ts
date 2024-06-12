/** 
 * 15. 三数之和
 * https://leetcode.cn/problems/3sum/description/
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
*/
function threeSum(nums: number[]): number[][] {
    // 排序 + 双指针
    nums.sort((a, b) => a - b);

    const result: number[][] = [];

    // 遍历数组 nums ，每次固定一个数 nums[i]，再使用左右指针指向 nums[i] 后面的两端，数字分别为 nums[left] 和 nums[right]
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) { // 如果 nums[i] + nums[left] + nums[right] == 0，将 nums[i]，nums[left]，nums[right] 加入结果中
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}