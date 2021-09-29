/// <reference types="node" />
declare const Utils: {
  fs: {
    readFile: typeof import("fs").readFile;
    readFileSync: typeof import("fs").readFileSync;
    writeFile: typeof import("fs").writeFile;
    writeFileSync: typeof import("fs").writeFileSync;
  };
  path: {
    resolve: (...pathSegments: string[]) => string;
    join: (...paths: string[]) => string;
    dirname: (p: string) => string;
  };
  url: {
    parse: typeof import("url").parse;
    fileURLToPath: typeof import("url").fileURLToPath;
  };
  run: {
    run: (path: string) => undefined;
    callBack: (path: string, fn: Function) => void;
  };
  getCurPath: (path: string) => string;
  toWriteData: (path: string, data: any) => void;
};
export default Utils;
