import range from "../Utils/range.js";
import { cache, exportFunction, pickChart } from "../Utils/charts.js";

const ranges = range([0, 100]) as number[];
cache.ranges = pickChart(ranges);
exportFunction("ranges");
