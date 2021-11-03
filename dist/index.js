/*
 * @Author: your name
 * @Date: 2021-09-29 15:52:23
 * @LastEditTime: 2021-11-02 17:18:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/src/index.ts
 */
import Utils from "./Utils/index.js";
const dirName = Utils.getCurPath(); // 项目路径
const url = `${dirName}/dist/Code`; // 执行文件夹
const data = Utils.fs.readdirSync(url); // 读取文件名列表
/** 批量执行 */
data.forEach((i) => {
  if (i.endsWith(".js")) {
    Utils.runAndAppendData(`Code/${i}`, "result"); // 执行指定文件，追加到同级文件内
  }
});
