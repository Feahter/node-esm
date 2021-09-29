/*
 * @Author: your name
 * @Date: 2021-07-26 15:05:49
 * @LastEditTime: 2021-08-20 16:01:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/index.js
 */
import { default as fs } from "./fs.js";
import { default as path } from "./path.js";
import { default as url } from "./url.js";
import { default as run } from "./run.js";
import getCurPath from "./getCurPath.js";
import toWriteData from "./toWriteData.js";
const Utils = {
  fs,
  path,
  url,
  run,
  getCurPath,
  toWriteData,
};
export default Utils;
