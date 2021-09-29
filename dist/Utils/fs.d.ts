/// <reference types="node" />
import {
  readFile, // 异步读文件
  readFileSync, // 同步读文件
  writeFile, // 异步写文件
  writeFileSync,
} from "fs";
declare const fs: {
  readFile: typeof readFile;
  readFileSync: typeof readFileSync;
  writeFile: typeof writeFile;
  writeFileSync: typeof writeFileSync;
};
export default fs;
