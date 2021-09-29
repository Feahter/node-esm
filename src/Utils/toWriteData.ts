/*
 * @Author: your name
 * @Date: 2021-07-27 17:44:36
 * @LastEditTime: 2021-09-26 17:59:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/toWriteData.js
 */

import Utils from "./index.js";

export const toWriteData = (path: string, data: any) => {
  const callBack = (err: any) => {
    if (err) {
      return err;
    }
    console.log(`内容写入${path}成功！`);
    return null;
  };
  Utils.fs.writeFile(path, data, callBack);
};

export default toWriteData;
