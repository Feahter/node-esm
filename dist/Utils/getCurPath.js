/*
 * @Author: your name
 * @Date: 2021-07-27 17:38:05
 * @LastEditTime: 2021-09-28 17:02:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/getCurPath.js
 */
import Utils from "./index.js";
export const getCurPath = (path) => {
  const result = Utils.path.resolve(path);
  return result;
};
export default getCurPath;
