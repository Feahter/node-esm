/*
 * @Author: your name
 * @Date: 2021-07-26 15:05:57
 * @LastEditTime: 2021-11-02 17:11:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/fs.js
 */
import {
  /** 异步读文件 */
  readFile,
  /** 同步读文件 */
  readFileSync,
  /** 异步写文件 */
  writeFile,
  /** 同步写文件 */
  writeFileSync,
  /** 异步读文件夹 */
  readdir,
  /** 同步读文件夹 */
  readdirSync,
  /** 异步追加内容 */
  appendFile,
  /** 同步追加内容 */
  appendFileSync,
} from "fs";

const fs = {
  readFile,
  readFileSync,
  writeFile,
  writeFileSync,
  readdir,
  readdirSync,
  appendFile,
  appendFileSync,
};

export default fs;
