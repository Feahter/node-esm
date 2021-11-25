import range from "../Utils/range.js";
import { cache, exportFunction, pickChart } from "../Utils/charts.js";

const ranges = range([63744, 64218]) as number[];
cache.ranges = pickChart(ranges);
exportFunction("ranges");
