import { test, expect } from '@playwright/test';

test('Profile page should display user information', async ({ page }) => {
  await page.goto('http://localhost:5173/profile');
  await expect(page.locator('h1')).toHaveText("Test User's Profile");
  await expect(page.locator('p')).toContainText('Level: 1');
  await expect(page.locator('p')).toContainText('Points: 330');
});
