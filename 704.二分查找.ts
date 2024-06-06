/** 
 * 704. 二分查找
 * https://leetcode.cn/problems/binary-search/description/
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
*/

// 版本1 左闭右闭区间
function search1(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let midIdx = left;
    while (left <= right) {
        midIdx = Math.floor((left + right) / 2);
        const midValue = nums[midIdx];
        if (midValue > target) {
            right = midIdx - 1;
        } else if (midValue < target) {
            left = midIdx + 1;
        } else {
            return midIdx;
        }
    }
    return -1;
};

// 版本2 左闭右开区间
function search2(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    let midIdx = left;
    while (left < right) {
        midIdx = Math.floor((left + right) / 2);
        const midValue = nums[midIdx];
        if (midValue > target) {
            right = midIdx;
        } else if (midValue < target) {
            left = midIdx + 1;
        } else {
            return midIdx;
        }
    }
    return nums[midIdx] === target ? midIdx : -1;
};