/** 349. 两个数组的交集
 * https://leetcode.cn/problems/intersection-of-two-arrays/description/
 * 给定两个数组 nums1 和 nums2 ，返回 它们的 交集
 * 输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
*/
function intersection(nums1: number[], nums2: number[]): number[] {
    // 使用 Set 数据结构去重
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // 计算交集
    const result: number[] = [];
    for (const num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
}

// 测试
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); // 输出: [2]
