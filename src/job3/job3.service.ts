import { JobExecutor } from '../executor/executor.service';
import { IJobExec } from '../executor/job';

// Service
@JobExecutor('job3')
export class Job3Service implements IJobExec {
  // Methods
  exec(): void {
    console.log(Job3Service.name);
  }
}
