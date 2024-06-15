/** 
 * 1047. 删除字符串中的所有相邻重复项
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 S 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 * 
 * 示例：
 * 输入："abbaca"
 * 输出："ca"
*/

function removeDuplicates(s: string): string {
    const charStack: string[] = [];
    for (let char of s) {
        if (charStack.length === 0 || charStack[charStack.length - 1] !== char) {
            charStack.push(char);
        } else {
            charStack.pop();
        }
    }
    return charStack.join('');
};

// 测试用例
console.log(removeDuplicates("abbaca")); // 输出：ca