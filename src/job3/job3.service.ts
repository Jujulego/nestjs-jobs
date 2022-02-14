import { IJobExec, JobExecutor } from '../executor/executor.service';

// Service
@JobExecutor('job3')
export class Job3Service implements IJobExec {
  // Methods
  exec(): void {
    console.log(Job3Service.name);
  }
}
