/*
 * @Author: your name
 * @Date: 2021-09-29 15:52:23
 * @LastEditTime: 2021-11-25 18:05:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/src/index.ts
 */

import Utils from "./Utils/index.js";

const generatedFile = (folderName: string, fileBaseName?: string) => {
  let baseName = "result";
  if (fileBaseName) {
    baseName = fileBaseName;
  }
  const dirName = Utils.getCurPath(); // 项目路径
  const url = `${dirName}/dist/${folderName}`; // 执行文件夹
  const data = Utils.fs.readdirSync(url); // 读取文件名列表
  /** 批量执行 */
  data.forEach((i: string) => {
    if (i.endsWith(".js")) {
      Utils.runAndAppendData(`${folderName}/${i}`, `${baseName}-${i}`); // 执行指定文件，追加到同级同名文件内
    }
  });
};

generatedFile("Code");
