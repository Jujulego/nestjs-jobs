import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ExecutorService } from './executor/executor.service';

// Bootstrap
(async () => {
  try {
    const app = await NestFactory.createApplicationContext(AppModule);

    const exec = await app.get(ExecutorService);
    await exec.exec('job1');
    await exec.exec('job2');
    await exec.exec('job3');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
