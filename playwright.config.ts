import { PlaywrightTestConfig, devices } from '@playwright/test';
import path from "path";

/**
 * NOTE: Chrome-like browsers works ONLY with y4m and mjpeg extension.
 * More: https://github.com/cypress-io/cypress/issues/2704
 */
const pathToVideo = path.resolve("akiyo_cif.y4m");

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: "on",
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        launchOptions:{
          args:[
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            `--use-file-for-fake-video-capture=${pathToVideo}`,
            "--mute-audio"
          ]
        }
      }
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