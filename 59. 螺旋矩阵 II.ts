/** 
 * 59. 螺旋矩阵 II
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 
 * 思路：
 * 首先初始化一个 n x n 的矩阵，并定义四个边界。
 * 然后按照螺旋顺序遍历矩阵，并在每次遍历后更新相应的边界。
 * 最后当所有元素都被填充到矩阵中时，返回矩阵。
 * 
 * 核心思路是按照顺时针螺旋顺序，依次填充矩阵的元素。可以将这个过程分为四个步骤，每个步骤对应矩阵的一个边界（上、右、下、左）。

1. 首先，需要初始化一个 n x n 的矩阵，以及四个边界（top, right, bottom, left）。同时，需要一个变量 num 用于记录当前填充的数字，初始值为 1。

2. 接下来，将遍历整个矩阵，按照顺时针螺旋顺序填充元素。为了实现这个目标，可以使用一个 while 循环，条件是 top <= bottom && left <= right。这个条件确保在填充矩阵时不会越界。

3. 在 while 循环中，需要按照顺时针螺旋顺序遍历矩阵的四个边界：
  - 从左到右遍历上边界（定top），填充元素并递增 num。完成后，将上边界下移一行（top++）。
  - 从上到下遍历右边界（定right），填充元素并递增 num。完成后，将右边界左移一列（right--）。
  - 从右到左遍历下边界（定bottom），填充元素并递增 num。完成后，将下边界上移一行（bottom--）。
  - 从下到上遍历左边界（定left），填充元素并递增 num。完成后，将左边界右移一列（left++）。

4. 当所有元素都被填充到矩阵中时，跳出 while 循环，并返回填充好的矩阵。

通过这种方法，我们可以确保按照顺时针螺旋顺序填充矩阵的所有元素。每次遍历一个边界后，我们都会更新相应的边界值，以确保在下一次遍历时不会重复填充已经填充过的元素。
*/

function generateMatrix(n: number): number[][] {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  let num = 0;

  while (top <= bottom && left <= right) {
    // 定top
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++
    }
    top++;

    // 定right
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
      right--;
    }

    // 定bottom
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }

    // 定left
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }
  return matrix;
};