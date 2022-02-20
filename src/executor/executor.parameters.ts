import { IJob, JobExecType } from './job';

// Symbol
export const JOB_PARAMETERS_KEY = Symbol('jobs:paramaters');

// Types
export type JobExtractor = (job: IJob) => unknown;
export type JobParameterRegistry = Array<JobExtractor | undefined>;

// Decorators
export function JobParameter(extractor: JobExtractor) {
  return (target: JobExecType, propertyKey: string | symbol, parameterIndex: number) => {
    const parameters: JobParameterRegistry = Reflect.get(target, JOB_PARAMETERS_KEY) ?? [];

    while (parameters.length <= parameterIndex) {
      parameters.push(undefined);
    }

    parameters[parameterIndex] = extractor;

    Reflect.set(target, JOB_PARAMETERS_KEY, parameters);
  };
}

export const JobStartedAt = JobParameter((job) => job.startedAt);
export const JobStartedBy = JobParameter((job) => job.startedBy);
