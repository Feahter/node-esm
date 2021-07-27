/*
 * @Author: your name
 * @Date: 2021-07-26 14:55:33
 * @LastEditTime: 2021-07-27 17:49:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/index.js
 */
import Utils from './Utils/index.js'

let file = Utils.path.resolve('./Code/hello.js')
let __dirname = Utils.getCurPath(import.meta.url)

let fn = (data) => {
  console.log('666: ', data)
  Utils.toWriteData(`${__dirname}/result.js`, data)
}
Utils.run.callBack(file, fn)
