import { test, expect } from '@playwright/test';

const testUrl = "chrome://webrtc-internals/";

test('basic test', async ({ page, context }) => {
    let chromeWebRtc = await context.newPage();
    await chromeWebRtc.goto(testUrl);
    chromeWebRtc.waitForTimeout(20000);
    await page.bringToFront();
    await page.goto("https://webrtc.github.io/samples/src/content/peerconnection/negotiate-timing/");
    await page.locator('[id="startButton"]').click();
    await page.locator('[id="callButton"]').click();
    await page.locator('[id="renegotiateButton"]').click();
    await page.waitForTimeout(2500);
    await page.waitForTimeout(2500);
    await page.locator('[id="renegotiateButton"]').click();
    await page.waitForTimeout(2500);
    await page.waitForTimeout(2500);
    // await page.pause();
});