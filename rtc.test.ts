// import { test, expect } from '@playwright/test';
import { test, expect  } from "./moon.fixture";


const testUrl = "chrome://webrtc-internals/";

test('webrtc test', async ({ page, context }) => {
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

/**
 * IMPORTANT NOTE: since you connect to ALREADY LAUNCHED BROWSER - there is no way to emulate webcam,
 * since we do not pass `launchOptions` before browser starts (they are provided in container).
 * Possible solution - rebuild images with speficic launchOptions.
 */
test.skip('webrtc test in container using fixture', async ({ moonPage }) => {
    await moonPage.goto("https://webrtc.github.io/samples/src/content/peerconnection/negotiate-timing/");
    await moonPage.locator('[id="startButton"]').click();
    await moonPage.locator('[id="callButton"]').click();
    await moonPage.locator('[id="renegotiateButton"]').click();
    await moonPage.waitForTimeout(2500);
    await moonPage.waitForTimeout(2500);
    await moonPage.locator('[id="renegotiateButton"]').click();
    await moonPage.waitForTimeout(2500);
    await moonPage.waitForTimeout(2500);
});