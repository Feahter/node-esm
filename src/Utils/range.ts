/*
 * @Author: your name
 * @Date: 2021-11-25 18:41:33
 * @LastEditTime: 2021-11-25 18:46:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /node/src/Utils/range.ts
 */
// type Last<T extends any[]> = T extends [...infer I, infer L] ? L : never;
// type First<T extends any[]> = T extends [infer I, ...infer L] ? I : never;

// type TupleToUnion<T extends any[]> = T[number];
// type typeNumberRange1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// type typeNumberRange2 = [100, 1000, 10000];
// type Data1=TupleToUnion<typeNumberRange1>;
// type Data2=TupleToUnion<typeNumberRange2>;

export const range = ([startAt, endAt]: [number, number]) => {
  let result: number[] | undefined;
  if (endAt - startAt > 0) {
    const size = endAt - startAt;
    result = [...Array(size).keys()].map((i) => {
      const temp = i + startAt;
      return temp;
    });
  }
  return result;
};

export default range;
