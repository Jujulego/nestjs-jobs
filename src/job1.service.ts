import { IJobExec, JobExecutor } from './executor/executor.service';

// Service
@JobExecutor('job1')
export class Job1Service implements IJobExec {
  // Methods
  exec(): void {
    console.log(Job1Service.name);
  }
}
