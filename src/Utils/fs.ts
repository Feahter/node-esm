/*
 * @Author: your name
 * @Date: 2021-07-26 15:05:57
 * @LastEditTime: 2021-08-19 13:09:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/fs.js
 */
import {
  readFile, // 异步读文件
  readFileSync, // 同步读文件
  writeFile, // 异步写文件
  writeFileSync, // 同步写文件
} from "fs";

const fs = {
  readFile,
  readFileSync,
  writeFile,
  writeFileSync,
};

export default fs;
