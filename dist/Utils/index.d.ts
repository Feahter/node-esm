/// <reference types="node" />
declare const Utils: {
  fs: {
    readFile: typeof import("fs").readFile;
    readFileSync: typeof import("fs").readFileSync;
    writeFile: typeof import("fs").writeFile;
    writeFileSync: typeof import("fs").writeFileSync;
    readdir: typeof import("fs").readdir;
    readdirSync: typeof import("fs").readdirSync;
    appendFile: typeof import("fs").appendFile;
    appendFileSync: typeof import("fs").appendFileSync;
  };
  path: {
    resolve: (...pathSegments: string[]) => string;
    join: (...paths: string[]) => string;
    dirname: (p: string) => string;
    basename: (p: string, ext?: string | undefined) => string;
  };
  url: {
    parse: typeof import("url").parse;
    fileURLToPath: typeof import("url").fileURLToPath;
  };
  run: {
    run: (path: string) => undefined;
    callBack: (path: string, fn: Function) => void;
  };
  process: {
    stdout: NodeJS.WriteStream & {
      fd: 1;
    };
    stderr: NodeJS.WriteStream & {
      fd: 2;
    };
    stdin: NodeJS.ReadStream & {
      fd: 0;
    };
    openStdin(): NodeJS.Socket;
    argv: string[];
    argv0: string;
    execArgv: string[];
    execPath: string;
    abort(): never;
    chdir(directory: string): void;
    cwd(): string;
    debugPort: number;
    emitWarning(warning: string | Error, ctor?: Function | undefined): void;
    emitWarning(
      warning: string | Error,
      type?: string | undefined,
      ctor?: Function | undefined
    ): void;
    emitWarning(
      warning: string | Error,
      type?: string | undefined,
      code?: string | undefined,
      ctor?: Function | undefined
    ): void;
    emitWarning(
      warning: string | Error,
      options?: NodeJS.EmitWarningOptions | undefined
    ): void;
    env: NodeJS.ProcessEnv;
    exit(code?: number | undefined): never;
    exitCode?: number | undefined;
    getgid(): number;
    setgid(id: string | number): void;
    getuid(): number;
    setuid(id: string | number): void;
    geteuid(): number;
    seteuid(id: string | number): void;
    getegid(): number;
    setegid(id: string | number): void;
    getgroups(): number[];
    setgroups(groups: readonly (string | number)[]): void;
    setUncaughtExceptionCaptureCallback(
      cb: ((err: Error) => void) | null
    ): void;
    hasUncaughtExceptionCaptureCallback(): boolean;
    version: string;
    versions: NodeJS.ProcessVersions;
    config: NodeJS.ProcessConfig;
    kill(pid: number, signal?: string | number | undefined): true;
    pid: number;
    ppid: number;
    title: string;
    arch: string;
    platform: NodeJS.Platform;
    mainModule?: NodeJS.Module | undefined;
    memoryUsage: NodeJS.MemoryUsageFn;
    cpuUsage(previousValue?: NodeJS.CpuUsage | undefined): NodeJS.CpuUsage;
    nextTick(callback: Function, ...args: any[]): void;
    release: NodeJS.ProcessRelease;
    features: {
      inspector: boolean;
      debug: boolean;
      uv: boolean;
      ipv6: boolean;
      tls_alpn: boolean;
      tls_sni: boolean;
      tls_ocsp: boolean;
      tls: boolean;
    };
    umask(): number;
    umask(mask: string | number): number;
    uptime(): number;
    hrtime: NodeJS.HRTime;
    send?(
      message: any,
      sendHandle?: any,
      options?:
        | {
            swallowErrors?: boolean | undefined;
          }
        | undefined,
      callback?: ((error: Error | null) => void) | undefined
    ): boolean;
    disconnect(): void;
    connected: boolean;
    allowedNodeEnvironmentFlags: ReadonlySet<string>;
    report?: NodeJS.ProcessReport | undefined;
    resourceUsage(): NodeJS.ResourceUsage;
    traceDeprecation: boolean;
    addListener(
      event: "beforeExit",
      listener: NodeJS.BeforeExitListener
    ): NodeJS.Process;
    addListener(
      event: "disconnect",
      listener: NodeJS.DisconnectListener
    ): NodeJS.Process;
    addListener(event: "exit", listener: NodeJS.ExitListener): NodeJS.Process;
    addListener(
      event: "rejectionHandled",
      listener: NodeJS.RejectionHandledListener
    ): NodeJS.Process;
    addListener(
      event: "uncaughtException",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    addListener(
      event: "uncaughtExceptionMonitor",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    addListener(
      event: "unhandledRejection",
      listener: NodeJS.UnhandledRejectionListener
    ): NodeJS.Process;
    addListener(
      event: "warning",
      listener: NodeJS.WarningListener
    ): NodeJS.Process;
    addListener(
      event: "message",
      listener: NodeJS.MessageListener
    ): NodeJS.Process;
    addListener(
      event: NodeJS.Signals,
      listener: NodeJS.SignalsListener
    ): NodeJS.Process;
    addListener(
      event: "multipleResolves",
      listener: NodeJS.MultipleResolveListener
    ): NodeJS.Process;
    addListener(
      event: "worker",
      listener: NodeJS.WorkerListener
    ): NodeJS.Process;
    emit(event: "beforeExit", code: number): boolean;
    emit(event: "disconnect"): boolean;
    emit(event: "exit", code: number): boolean;
    emit(event: "rejectionHandled", promise: Promise<unknown>): boolean;
    emit(event: "uncaughtException", error: Error): boolean;
    emit(event: "uncaughtExceptionMonitor", error: Error): boolean;
    emit(
      event: "unhandledRejection",
      reason: unknown,
      promise: Promise<unknown>
    ): boolean;
    emit(event: "warning", warning: Error): boolean;
    emit(
      event: "message",
      message: unknown,
      sendHandle: unknown
    ): NodeJS.Process;
    emit(event: NodeJS.Signals, signal: NodeJS.Signals): boolean;
    emit(
      event: "multipleResolves",
      type: NodeJS.MultipleResolveType,
      promise: Promise<unknown>,
      value: unknown
    ): NodeJS.Process;
    emit(event: "worker", listener: NodeJS.WorkerListener): NodeJS.Process;
    on(
      event: "beforeExit",
      listener: NodeJS.BeforeExitListener
    ): NodeJS.Process;
    on(
      event: "disconnect",
      listener: NodeJS.DisconnectListener
    ): NodeJS.Process;
    on(event: "exit", listener: NodeJS.ExitListener): NodeJS.Process;
    on(
      event: "rejectionHandled",
      listener: NodeJS.RejectionHandledListener
    ): NodeJS.Process;
    on(
      event: "uncaughtException",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    on(
      event: "uncaughtExceptionMonitor",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    on(
      event: "unhandledRejection",
      listener: NodeJS.UnhandledRejectionListener
    ): NodeJS.Process;
    on(event: "warning", listener: NodeJS.WarningListener): NodeJS.Process;
    on(event: "message", listener: NodeJS.MessageListener): NodeJS.Process;
    on(event: NodeJS.Signals, listener: NodeJS.SignalsListener): NodeJS.Process;
    on(
      event: "multipleResolves",
      listener: NodeJS.MultipleResolveListener
    ): NodeJS.Process;
    on(event: "worker", listener: NodeJS.WorkerListener): NodeJS.Process;
    on(
      event: string | symbol,
      listener: (...args: any[]) => void
    ): NodeJS.Process;
    once(
      event: "beforeExit",
      listener: NodeJS.BeforeExitListener
    ): NodeJS.Process;
    once(
      event: "disconnect",
      listener: NodeJS.DisconnectListener
    ): NodeJS.Process;
    once(event: "exit", listener: NodeJS.ExitListener): NodeJS.Process;
    once(
      event: "rejectionHandled",
      listener: NodeJS.RejectionHandledListener
    ): NodeJS.Process;
    once(
      event: "uncaughtException",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    once(
      event: "uncaughtExceptionMonitor",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    once(
      event: "unhandledRejection",
      listener: NodeJS.UnhandledRejectionListener
    ): NodeJS.Process;
    once(event: "warning", listener: NodeJS.WarningListener): NodeJS.Process;
    once(event: "message", listener: NodeJS.MessageListener): NodeJS.Process;
    once(
      event: NodeJS.Signals,
      listener: NodeJS.SignalsListener
    ): NodeJS.Process;
    once(
      event: "multipleResolves",
      listener: NodeJS.MultipleResolveListener
    ): NodeJS.Process;
    once(event: "worker", listener: NodeJS.WorkerListener): NodeJS.Process;
    once(
      event: string | symbol,
      listener: (...args: any[]) => void
    ): NodeJS.Process;
    prependListener(
      event: "beforeExit",
      listener: NodeJS.BeforeExitListener
    ): NodeJS.Process;
    prependListener(
      event: "disconnect",
      listener: NodeJS.DisconnectListener
    ): NodeJS.Process;
    prependListener(
      event: "exit",
      listener: NodeJS.ExitListener
    ): NodeJS.Process;
    prependListener(
      event: "rejectionHandled",
      listener: NodeJS.RejectionHandledListener
    ): NodeJS.Process;
    prependListener(
      event: "uncaughtException",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    prependListener(
      event: "uncaughtExceptionMonitor",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    prependListener(
      event: "unhandledRejection",
      listener: NodeJS.UnhandledRejectionListener
    ): NodeJS.Process;
    prependListener(
      event: "warning",
      listener: NodeJS.WarningListener
    ): NodeJS.Process;
    prependListener(
      event: "message",
      listener: NodeJS.MessageListener
    ): NodeJS.Process;
    prependListener(
      event: NodeJS.Signals,
      listener: NodeJS.SignalsListener
    ): NodeJS.Process;
    prependListener(
      event: "multipleResolves",
      listener: NodeJS.MultipleResolveListener
    ): NodeJS.Process;
    prependListener(
      event: "worker",
      listener: NodeJS.WorkerListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "beforeExit",
      listener: NodeJS.BeforeExitListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "disconnect",
      listener: NodeJS.DisconnectListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "exit",
      listener: NodeJS.ExitListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "rejectionHandled",
      listener: NodeJS.RejectionHandledListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "uncaughtException",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "uncaughtExceptionMonitor",
      listener: NodeJS.UncaughtExceptionListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "unhandledRejection",
      listener: NodeJS.UnhandledRejectionListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "warning",
      listener: NodeJS.WarningListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "message",
      listener: NodeJS.MessageListener
    ): NodeJS.Process;
    prependOnceListener(
      event: NodeJS.Signals,
      listener: NodeJS.SignalsListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "multipleResolves",
      listener: NodeJS.MultipleResolveListener
    ): NodeJS.Process;
    prependOnceListener(
      event: "worker",
      listener: NodeJS.WorkerListener
    ): NodeJS.Process;
    listeners(event: "beforeExit"): NodeJS.BeforeExitListener[];
    listeners(event: "disconnect"): NodeJS.DisconnectListener[];
    listeners(event: "exit"): NodeJS.ExitListener[];
    listeners(event: "rejectionHandled"): NodeJS.RejectionHandledListener[];
    listeners(event: "uncaughtException"): NodeJS.UncaughtExceptionListener[];
    listeners(
      event: "uncaughtExceptionMonitor"
    ): NodeJS.UncaughtExceptionListener[];
    listeners(event: "unhandledRejection"): NodeJS.UnhandledRejectionListener[];
    listeners(event: "warning"): NodeJS.WarningListener[];
    listeners(event: "message"): NodeJS.MessageListener[];
    listeners(event: NodeJS.Signals): NodeJS.SignalsListener[];
    listeners(event: "multipleResolves"): NodeJS.MultipleResolveListener[];
    listeners(event: "worker"): NodeJS.WorkerListener[];
    removeListener(
      eventName: string | symbol,
      listener: (...args: any[]) => void
    ): NodeJS.Process;
    off(
      eventName: string | symbol,
      listener: (...args: any[]) => void
    ): NodeJS.Process;
    removeAllListeners(event?: string | symbol | undefined): NodeJS.Process;
    setMaxListeners(n: number): NodeJS.Process;
    getMaxListeners(): number;
    rawListeners(eventName: string | symbol): Function[];
    listenerCount(eventName: string | symbol): number;
    eventNames(): (string | symbol)[];
  };
  getCurPath: (path?: string | undefined) => string;
  toWriteData: (path: string, data: any) => void;
  toAppendData: (path: string, data: any) => void;
  runAndWriteData: (
    runFilePath: string,
    writeFileName: string,
    runBasePath?: string | undefined,
    writeBasePath?: undefined
  ) => void;
  runAndAppendData: (
    runFilePath: string,
    writeFileName: string,
    runBasePath?: string | undefined,
    writeBasePath?: undefined
  ) => void;
};
export default Utils;
