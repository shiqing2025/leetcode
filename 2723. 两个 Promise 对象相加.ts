/** 
 * 2723. 两个 Promise 对象相加
 * https://leetcode.cn/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
 * 给定两个 promise 对象 promise1 和 promise2，返回一个新的 promise。
 * promise1 和 promise2 都会被解析为一个数字。
 * 返回的 Promise 应该解析为这两个数字的和。
*/

type P = Promise<number>;

async function add(promise1: P, promise2: P): P {
  // return Promise.allSettled([promise1, promise2]).then(([a, b]) => {
  //   console.log('a', a);
  //   console.log('b', b);
  //   return a.status === 'fulfilled' && b.status === 'fulfilled' ? Promise.resolve(a.value + b.value) : Promise.reject('error');
  // });

  // return Promise.all([promise1, promise2]).then(([a, b]) => {
  //   console.log('a', a);
  //   console.log('b', b);
  //   return a + b;
  // })

  const [a, b] = await Promise.allSettled([promise1, promise2]);
  console.log(a);
  console.log(b);
  return a.status === 'fulfilled' && b.status === 'fulfilled' ? Promise.resolve(a.value + b.value) : Promise.reject('error');
}


// test
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);


add(p1, p2).then((res) => {
  console.log(res);
});