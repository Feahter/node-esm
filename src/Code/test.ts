/*
 * @Author: your name
 * @Date: 2021-11-02 17:00:28
 * @LastEditTime: 2021-11-19 18:33:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/src/Code/test.ts
 */
console.log("Hello,ESM NODE!");

const testFn = () => {
  const node = { value: "test" };
  node.value += "1-2";
  node.value = "1-2";
  console.log(node.value);
};
testFn();
