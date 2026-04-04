import { startApp } from 'modelence/server';
import exampleModule from '@/server/example';
import todoModule from '@/server/todo';
import regenerateModule from '@/server/regenerate';
import { createDemoUser } from '@/server/migrations/createDemoUser';

startApp({
  modules: [exampleModule, todoModule, regenerateModule],

  security: {
    frameAncestors: ['https://modelence.com', 'https://*.modelence.com', 'http://localhost:*'],
  },

  migrations: [
    {
      version: 1,
      description: 'Create demo user',
      handler: createDemoUser,
    },
  ],
});
