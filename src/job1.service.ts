import { JobExecutor } from './executor/executor.service';
import { IJobExec } from './executor/job';
import { JobParameter } from './executor/executor.parameters';

// Service
@JobExecutor('job1')
export class Job1Service implements IJobExec {
  // Methods
  exec(
    @JobParameter((job) => job.startedBy) startedBy: string,
    @JobParameter((job) => job.startedAt) startedAt: string,
  ): void {
    console.log(Job1Service.name, 'by', startedBy, 'at', startedAt);
  }
}
