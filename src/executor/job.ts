// Types
export interface IJob {
  startedBy: string;
  startedAt: string;
  input?: unknown;
}

export interface IJobExec {
  exec(...args: any[]): void;
}

export interface JobExecType {
  new(...args: any[]): IJobExec;
}
