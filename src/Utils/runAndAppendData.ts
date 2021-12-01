/*
 * @Author: your name
 * @Date: 2021-11-02 13:49:00
 * @LastEditTime: 2021-11-25 19:03:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/src/Utils/runAndWriteData.ts
 */
import Utils from "./index.js";

// 工具集
export const runAndWriteData = (
  runFilePath: string,
  writeFileName: string,
  runBasePath?: string | undefined,
  writeBasePath?: string | undefined
) => {
  const outputPath = runBasePath || "./dist"; // 文件域
  const file = Utils.path.resolve(`${outputPath}/${runFilePath}`); // 执行文件
  const dirName = Utils.path.dirname(file);
  const fn = (data: any) => {
    let writePath = `${dirName}/${writeFileName}`;
    if (writeBasePath) {
      writePath = `${writeBasePath}/${writeFileName}`;
    }
    Utils.toAppendData(writePath, data); // 写入文件
  };

  Utils.run.callBack(file, fn); // 执行函数
};

export default runAndWriteData;
