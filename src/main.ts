import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ExecutorService } from './executor/executor.service';

// Bootstrap
(async () => {
  try {
    const app = await NestFactory.createApplicationContext(AppModule);

    const exec = await app.get(ExecutorService);
    await exec.exec('job1', { startedBy: 'me', startedAt: new Date().toISOString() });
    await exec.exec('job2', { startedBy: 'me', startedAt: new Date().toISOString() });
    await exec.exec('job3', { startedBy: 'me', startedAt: new Date().toISOString() });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
