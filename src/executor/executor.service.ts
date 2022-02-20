import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { IJob, JobExecType } from './job';
import { JOB_PARAMETERS_KEY, JobParameterRegistry } from './executor.parameters';

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
  async exec(name: string, job: IJob): Promise<void> {
    // Instantiate executor
    const token = ExecutorService._registry[name];
    if (!token) throw new Error(`No executor for job ${name}`);

    const executor = await this._module.get(token, { strict: false });

    // Build parameters array
    const parameters: JobParameterRegistry = Reflect.get(executor, JOB_PARAMETERS_KEY) ?? [];
    executor.exec.apply(executor, parameters.map((ext) => ext && ext(job)));
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
