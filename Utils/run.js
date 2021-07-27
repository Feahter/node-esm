/*
 * @Author: your name
 * @Date: 2021-07-27 16:48:49
 * @LastEditTime: 2021-07-27 17:31:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/run.js
 */
import { exec, execSync } from 'child_process'

let run = (path) => {
  let result
  exec(`node ${path}`, (err, data) => {
    if (err) {
      result = err
    }
    result = data
  })
  return result
}

let callBack = (path, callback) => {
  exec(`node ${path}`, (err, data) => {
    if (err) {
      callback(err)
    }
    callback(data)
  })
}

export default {
  run,
  callBack,
}
