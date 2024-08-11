import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('open-registration-form-button').click();
//   await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('dexx');
//   await page.getByLabel('Last name').click();
  await page.getByLabel('Last name').fill('tenn');
//   await page.getByLabel('Mobile number or email').click();
  await page.getByLabel('Mobile number or email').fill('5555555555');
//   await page.getByLabel('New password').click();
  await page.getByLabel('New password').fill('Testing123');
  await page.getByLabel('Month').selectOption('10');
  await page.getByLabel('Day').selectOption('14');
  await page.getByLabel('Year').selectOption('1990');
  await page.getByText('Male', { exact: true }).click();
});