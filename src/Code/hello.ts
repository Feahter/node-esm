/*
 * @Author: your name
 * @Date: 2021-07-26 15:09:46
 * @LastEditTime: 2021-11-02 16:49:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/Code/hello.js
 */
import Utils from "../Utils/index.js";

const dirName = Utils.getCurPath("./");
const test = Utils.path.basename("");
const data = Utils.process.execPath;

const fileInfo = Utils.fs.readdirSync(dirName);
console.log("fileInfo: ", fileInfo);
console.log("runPath: ", data);
console.log("test: ", test);
console.log('"Hello, NodeESM."');
console.log(`"curPath: , ${dirName}"`);
