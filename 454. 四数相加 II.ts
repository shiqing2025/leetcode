/** 
 * 454. 四数相加 II
 * https://leetcode.cn/problems/4sum-ii/description/
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，
 * 请你计算有多少个元组 (i, j, k, l) 能满足：0 <= i, j, k, l < n
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
*/

function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    // 创建一个哈希表来记录数组 nums1 和 nums2 中所有可能的两数之和及其出现的次数
    const sumMap: Map<number, number> = new Map();

    // 遍历数组 nums1 和 nums2
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            // 计算两数之和
            const sum = num1 + num2;
            // 如果哈希表中已经存在这个和，将其出现次数加一，否则将其出现次数设为 1
            sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
        }
    }

    // 初始化计数器
    let count = 0;

    // 遍历数组 nums3 和 nums4
    for (const num3 of nums3) {
        for (const num4 of nums4) {
            // 计算两数之和的相反数
            const target = -(num3 + num4);
            // 如果哈希表中存在这个相反数，将其出现次数加到计数器上
            count += sumMap.get(target) || 0;
        }
    }

    // 返回计数器的值
    return count;
}

// 测试
console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])); // 2