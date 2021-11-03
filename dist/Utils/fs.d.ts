/// <reference types="node" />
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
declare const fs: {
  readFile: typeof readFile;
  readFileSync: typeof readFileSync;
  writeFile: typeof writeFile;
  writeFileSync: typeof writeFileSync;
  readdir: typeof readdir;
  readdirSync: typeof readdirSync;
  appendFile: typeof appendFile;
  appendFileSync: typeof appendFileSync;
};
export default fs;
