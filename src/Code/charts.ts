/*
 * @Author: your name
 * @Date: 2021-11-22 14:49:07
 * @LastEditTime: 2021-11-22 15:33:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /node/src/Code/charts.ts
 */
// fromCodePoint 129750
// Limit
const MAX: number = 129750;
const MIN: 0 = 0;
// Heap
const CHARTS_DICT: { [x: string]: number } = {};
const CODE_DICT: { [x: string]: string } = {};

// Defined
const initDict = () => {
  for (let i = MIN; i <= MAX; i += 1) {
    const temp: string = String.fromCodePoint(i);
    CODE_DICT[i] = temp;
    CHARTS_DICT[temp] = i;
  }
};
// Init
initDict();

// Transform
const codeJson = JSON.stringify(CODE_DICT);
const chartsJson = JSON.stringify(CHARTS_DICT);

// Console
console.log(`export const CODE_DICT = ${codeJson}`);
console.log(`export const CHARTS_DICT = ${chartsJson}`);
