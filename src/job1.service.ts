import { JobExecutor } from './executor/executor.service';
import { IJobExec } from './executor/job';
import { JobStartedAt, JobStartedBy } from './executor/executor.parameters';

// Service
@JobExecutor('job1')
export class Job1Service implements IJobExec {
  // Methods
  exec(
    @JobStartedBy startedBy: string,
    @JobStartedAt startedAt: string,
  ): void {
    console.log(Job1Service.name, 'by', startedBy, 'at', startedAt);
  }
}
