/*
 * @Author: your name
 * @Date: 2021-11-23 11:02:44
 * @LastEditTime: 2021-11-23 11:08:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /node/src/Utils/zeroFill.ts
 */
export const zeroFill = (value: number | string, digit?: number) => {
  let result: string | undefined;
  if (value) {
    const len = String(value).length;
    const zeroString = "0".repeat((digit || 18) - len);
    result = `${zeroString}${value}`;
  }
  return result;
};

export default zeroFill;
