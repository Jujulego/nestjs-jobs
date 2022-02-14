import { Module } from '@nestjs/common';

import { ExecutorModule } from './executor/executor.module';
import { Job1Service } from './job1.service';
import { Job2Service } from './job2.service';
import { Job3Module } from './job3/job3.module';

// Module
@Module({
  imports: [
    ExecutorModule,
    Job3Module
  ],
  providers: [
    Job1Service,
    Job2Service
  ]
})
export class AppModule {}
