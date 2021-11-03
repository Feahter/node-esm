/*
 * @Author: your name
 * @Date: 2021-07-26 15:05:49
 * @LastEditTime: 2021-11-02 17:15:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/index.js
 */

import { default as fs } from "./fs.js";
import { default as path } from "./path.js";
import { default as url } from "./url.js";
import { default as run } from "./run.js";
import { default as process } from "./process.js";
import getCurPath from "./getCurPath.js";
import toWriteData from "./toWriteData.js";
import toAppendData from "./toAppendData.js";
import runAndWriteData from "./runAndWriteData.js";
import runAndAppendData from "./runAndAppendData.js";

const Utils = {
  fs,
  path,
  url,
  run,
  process,
  getCurPath,
  toWriteData,
  toAppendData,
  runAndWriteData,
  runAndAppendData,
};

export default Utils;
