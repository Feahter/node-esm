/*
 * @Author: your name
 * @Date: 2021-07-27 16:48:49
 * @LastEditTime: 2021-11-22 15:15:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/run.js
 */
import { exec } from "child_process";
const run = (path) => {
  let result;
  exec(`node ${path}`, (err, data) => {
    if (err) {
      result = err;
    }
    result = data;
  });
  return result;
};
const callBack = (path, fn) => {
  exec(
    `node ${path}`,
    {
      maxBuffer: 5 * 1024 * 1024,
    },
    (err, data) => {
      if (err) {
        fn(err);
      }
      fn(data);
    }
  );
};
export default {
  run,
  callBack,
};
