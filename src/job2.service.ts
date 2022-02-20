import { JobExecutor } from './executor/executor.service';
import { IJobExec } from './executor/job';

// Service
@JobExecutor('job2')
export class Job2Service implements IJobExec {
  // Methods
  exec(): void {
    console.log(Job2Service.name);
  }
}
