import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/about',
  '/contact',
  '/programs',
  '/impact-stories',
  '/gallery',
  '/donate',
];

for (const path of pages) {
  test(`Testing ${path}`, async ({ page }) => {
    const consoleErrors: string[] = [];

    // Browser console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        console.log(`Console Error: ${msg.text()}`);
        consoleErrors.push(msg.text());
      }
    });

    // HTTP 4xx / 5xx
    page.on('response', (response) => {
      if (response.status() >= 400) {
        console.log(`HTTP ${response.status()} -> ${response.url()}`);
      }
    });

    // Failed network requests (IMPORTANT)
    page.on('requestfailed', (request) => {
      console.log(
        `FAILED REQUEST: ${request.url()}`
      );
      console.log(
        `REASON: ${request.failure()?.errorText}`
      );
    });

    await page.goto(path);

    await expect(page).toHaveURL(new RegExp(path === '/' ? '/' : path));

    await expect(page.locator('body')).toBeVisible();

    await page.reload();

    await expect(page.locator('body')).toBeVisible();

    //expect(consoleErrors).toEqual([]);
  });
}