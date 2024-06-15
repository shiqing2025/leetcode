/** 
 * 20. 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/description/
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
*/

function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketsMap = new Map([
      ['(', ')'],
      ['{', '}'],
      ['[', ']']
    ]);
  
    for (const char of s) {
      if (bracketsMap.has(char)) {
        stack.push(char);
      } else {
        const lastBracket = stack.pop();
        if (bracketsMap.get(lastBracket!) !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // 测试用例
  console.log(isValid('()')); // 输出：true
  console.log(isValid('()[]{}')); // 输出：true
  console.log(isValid('(]')); // 输出：false
  console.log(isValid('([)]')); // 输出：false
  console.log(isValid('{[]}')); // 输出：true