import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run react-fe-challenges:serve',
        production: 'nx run react-fe-challenges:preview',
      },
      ciWebServerCommand: 'nx run react-fe-challenges:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
