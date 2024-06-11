/** 
 * 242. 有效的字母异位词
 * https://leetcode.cn/problems/valid-anagram/description/
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词
*/

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
      return false;
    }
  
    const map = new Map();
  
    for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) || 0) + 1); // map.get(s[i]) || 0 为了防止 map.get(s[i]) 为 undefined
      map.set(t[i], (map.get(t[i]) || 0) - 1);
    }
  
    // 判断 map 中是否所有的值都为 0 
    for (const count of map.values()) {
      if (count !== 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // 测试
  const s = 'anagram';
  const t = 'nagaram';
  console.log(isAnagram(s, t)); // 输出: true