import { Page, test as base } from '@playwright/test';

type MoonFixture = {
  moonPage: Page;
};

export const test = base.extend<MoonFixture>({
    moonPage: async ({ playwright }, use) => {
        let b = await playwright.chromium.connect({ 
            timeout: 0, 
            /**
             * NOTE: pull the image with browser before launch
             */
            wsEndpoint: 'ws://localhost:4444/playwright/chrome/97.0?headless=false'
        });
        let newContext = await b.newContext();
        let newPage = await newContext.newPage();
        let webrtcPage = await newContext.newPage();
        await webrtcPage.goto("chrome://webrtc-internals/");
        await newPage.bringToFront();
        await use(newPage);
    }
});
export { expect } from '@playwright/test';