import { devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
      trace: "on",
      permissions:["microphone","camera"],
      launchOptions:{
          args:[
              "--allow-file-access-from-files", 
        //   "--mute-audio",
        "--use-fake-ui-for-media-stream",
        "--use-fake-device-for-media-stream",
        ]
      }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

export default config;