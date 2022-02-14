import { Module } from '@nestjs/common';

import { Job3Service } from './job3.service';

// Service
@Module({
  providers: [Job3Service]
})
export class Job3Module {}
