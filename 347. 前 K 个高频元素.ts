/** 
 * 347.前 K 个高频元素
 * https://leetcode.cn/problems/top-k-frequent-elements/description/
 * 
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * 示例 1:
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
*/

// 思路：哈希表 + 排序
// 1. 遍历数组，使用哈希表记录每个元素出现的次数 O(n)
// 2. 对哈希表按照 value 值进行排序 O(nlogn)
// 3. 取出前 k 个元素 O(k)
// 总时间复杂度：O(nlogn)   空间复杂度：O(n)
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  const list = Array.from(map)
  list.sort((a, b) => b[1] - a[1])
  return list.slice(0, k).map(item => item[0])
}

// 测试
const nums = [1, 1, 1, 2, 2, 3]
console.log(topKFrequent(nums, 2)) // [1, 2]
