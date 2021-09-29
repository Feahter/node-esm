/*
 * @Author: your name
 * @Date: 2021-07-26 15:09:46
 * @LastEditTime: 2021-09-29 15:52:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/Code/hello.js
 */
import Utils from "../Utils/index.js";

const dirName = Utils.getCurPath("./");

console.log('"Hello, NodeESM."');
console.log(`"curPath: , ${dirName}"`);
