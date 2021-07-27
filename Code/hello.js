/*
 * @Author: your name
 * @Date: 2021-07-26 15:09:46
 * @LastEditTime: 2021-07-27 17:41:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/Code/hello.js
 */
import Utils from '../Utils/index.js'

const __dirname = Utils.getCurPath(import.meta.url);
console.log('Hello, world.')
console.log('curPath: ', __dirname)
