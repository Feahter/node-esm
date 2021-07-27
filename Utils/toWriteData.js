/*
 * @Author: your name
 * @Date: 2021-07-27 17:44:36
 * @LastEditTime: 2021-07-27 17:48:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/toWriteData.js
 */

import Utils from './index.js'


export const toWriteData = (path, data) => {
  Utils.fs.writeFile(path, data, (err) => {
    if (err) {
      return err
    }
    console.log(`内容写入${path}成功！`)
  })
}

export default toWriteData;
