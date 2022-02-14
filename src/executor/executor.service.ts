import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

// Types
export interface IJobExec {
  exec(): void;
}

export interface JobExecType {
  new(...args: any[]): IJobExec;
}

// Service
@Injectable()
export class ExecutorService {
  // Constructor
  constructor(
    private readonly _module: ModuleRef,
  ) {}

  // Statics
  private static readonly _registry: Partial<Record<string, JobExecType>> = {};

  static registerJob(job: string, cls: JobExecType): void {
    this._registry[job] = cls;
  }

  // Methods
  async exec(job: string): Promise<void> {
    const token = ExecutorService._registry[job];
    if (!token) throw new Error(`No executor for job ${job}`);

    const executor = await this._module.get(token, { strict: false });
    executor.exec();
  }
}

// Decorator
export function JobExecutor(job: string) {
  return (cls: JobExecType) => {
    // Register class
    ExecutorService.registerJob(job, cls);

    // Make class injectable
    Injectable()(cls);
  };
}
