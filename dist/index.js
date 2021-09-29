/*
 * @Author: your name
 * @Date: 2021-07-26 14:55:33
 * @LastEditTime: 2021-09-29 15:46:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/index.js
 */
import Utils from "./Utils/index.js";
const outputPath = "./dist";
const file = Utils.path.resolve(`${outputPath}/Code/hello.js`);
const dirName = Utils.getCurPath(outputPath);
const fn = (data) => {
  Utils.toWriteData(`${dirName}/result.js`, data);
};
Utils.run.callBack(file, fn);
