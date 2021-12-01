/*
 * @Author: your name
 * @Date: 2021-11-25 18:58:14
 * @LastEditTime: 2021-12-01 15:05:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /node/src/Code/readme.ts
 */
/** for readme */
import Utils from "../Utils/index.js";

const dirName = Utils.getCurPath();
const url = `${dirName}/package.json`;
const data = Utils.fs.readFileSync(url);
const packageInfo = JSON.parse(data.toString());
const { scripts } = packageInfo;
Object.keys(scripts).forEach((i) => {
  console.log(`"yarn ${i}"`);
});
