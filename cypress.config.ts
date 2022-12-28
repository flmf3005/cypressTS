import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalOriginDependencies: true,
  },
  env: {
    USERNAME: 'junior@delcio.com.br',
    SENHA: 'delcio123',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    json: false,
    overwrite: false,
    reportDir: 'cypress/results',
    reportFilename: 'ZapLink_[datetime]',
    reportPageTitle: 'ZapLink Automation Tests',
    timestamp: 'ddmmyyyy_HHMMss',
  },
});
