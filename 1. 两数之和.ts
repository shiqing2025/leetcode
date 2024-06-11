/** 
 * 1. 两数之和
 * https://leetcode.cn/problems/two-sum/description/
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
*/
function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    throw new Error('No two sum solution');
}

// 测试
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // 输出: [0, 1]