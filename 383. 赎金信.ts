/** 
 * 383. 赎金信
 * https://leetcode.cn/problems/ransom-note/description/
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 如果可以，返回 true；否则返回 false
 * magazine 中的每个字符只能在 ransomNote 中使用一次
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  const charMap: Map<string, number> = new Map();

  for (const char of magazine) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    if (!charMap.has(char) || charMap.get(char) === 0) {
      return false;
    }
    charMap.set(char, charMap.get(char)! - 1);
  }

  return true;
}