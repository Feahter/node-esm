/*
 * @Author: your name
 * @Date: 2021-11-22 14:49:07
 * @LastEditTime: 2021-11-25 18:39:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /node/src/Code/charts.ts
 */
/**
 * 65-123 英文
 * 127312-127338 英文
 * 11905～40912 汉字
 * 63744~64218 汉字
 * 44032 ～55204 韩文
 */
// fromCodePoint 129750
// import range from '../Utils/range.js';

// Limit
const MAX: number = 129750;
const MIN: 0 = 0;
// Heap
export const CHART_DICT: { [x: string]: number } = {};
export const CODE_DICT: { [x: string]: string } = {};

// Defined
const initDict = () => {
  for (let i = MIN; i <= MAX; i += 1) {
    const temp: string = String.fromCodePoint(i);
    CODE_DICT[i] = temp;
    CHART_DICT[temp] = i;
  }
};
// Init
initDict();

// Console
export const cache: { [x: string]: any } = {};
export const exportFunction = (objectName: string, data?: string) => {
  let result = data;
  if (!result) {
    result = JSON.stringify(cache?.[objectName]);
  }
  console.log(`export const ${objectName} = ${result};
export default ${objectName};
`);
};
// const codeJson = JSON.stringify(CODE_DICT);
// exportFunction('CODE_DICT', codeJson);
// const chartsJson = JSON.stringify(CHART_DICT);
// exportFunction('CHART_DICT', chartsJson);

export const pickChart = (ranges: number[]) => {
  const result: { [x: string]: string } = {};
  ranges.forEach((i) => {
    result[i] = CODE_DICT[i];
  });
  return result;
};

// const rangeOne = range([65, 123]) as number[];
// cache.resultOne = pickChart(rangeOne);
// exportFunction('resultOne');

// const rangeTwo = range([11905, 40912]) as number[];
// cache.resultTwo = pickChart(rangeTwo);
// exportFunction('resultTwo');

export default CODE_DICT;
