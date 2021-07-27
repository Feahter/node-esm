/*
 * @Author: your name
 * @Date: 2021-07-27 17:38:05
 * @LastEditTime: 2021-07-27 17:41:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/Utils/getCurPath.js
 */
import Utils from './index.js'

export const getCurPath=(path)=>{
    let result=Utils.path.dirname(Utils.url.fileURLToPath(path));
    return result;
}

export default getCurPath;