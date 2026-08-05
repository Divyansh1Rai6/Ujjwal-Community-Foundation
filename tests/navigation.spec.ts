import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/about',
  '/contact',
  '/programs',
  '/impact-stories',
  '/gallery',
  '/donate'
];

for (const path of pages) {

  test(`Testing ${path}`, async ({ page }) => {

    const consoleErrors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('response', response => {
      if (response.status() >= 400) {
        console.log(`HTTP ${response.status()} : ${response.url()}`);
      }
    });

    await page.goto(path);

    await expect(page).toHaveURL(new RegExp(path === '/' ? '/' : path));

    await expect(page.locator('body')).toBeVisible();

    await page.reload();

    await expect(page.locator('body')).toBeVisible();

    expect(consoleErrors).toEqual([]);
  });

}