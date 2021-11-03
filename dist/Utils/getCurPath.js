/*
 * @Author: your name
 * @Date: 2021-07-27 17:38:05
 * @LastEditTime: 2021-11-02 16:54:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/getCurPath.js
 */
import Utils from "./index.js";
export const getCurPath = (path) => {
  const url = path || "";
  const result = Utils.path.resolve(url);
  return result;
};
export default getCurPath;
