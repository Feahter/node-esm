/*
 * @Author: your name
 * @Date: 2021-11-25 18:46:48
 * @LastEditTime: 2021-12-01 14:56:01
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /node/src/Code/charts.ts
 */
import range from "../Utils/range.js";
import { cache, exportFunction, pickChart } from "../Utils/charts.js";

const ranges = range([63744, 64218]) as number[];
cache.ranges = pickChart(ranges);
exportFunction("ranges");
