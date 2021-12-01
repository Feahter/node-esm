/*
 * @Author: your name
 * @Date: 2021-11-25 18:46:48
 * @LastEditTime: 2021-12-01 14:51:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /node/src/Code/demo.ts
 */

const obj: { [x: string]: { done: number; all: number } } = {
  followTask: {
    done: 0,
    all: 1,
  },
  mkTask: {
    done: 0,
    all: 2,
  },
  activityTask: {
    done: 0,
    all: 3,
  },
};

let count = 0;
Object.keys(obj).forEach((i) => {
  const { all } = obj[i];
  count += all;
  console.log("count: ", count);
});
console.log(count);
