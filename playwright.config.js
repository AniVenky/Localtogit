// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  //retries: 1,
  use: {
    headless: false,
    //screenshot: 'only-on-failure',
    //video: 'retain-on-failure',
    baseURL: 'https://myecommerceapp.com',
  },
  reporter: [['list'], ['allure-playwright']],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    /*{
      name: 'firefox',
      use: { browserName: 'firefox' },
    }*/
  ]
});
