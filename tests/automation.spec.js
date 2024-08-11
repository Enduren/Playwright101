import { test, expect, chromium } from '@playwright/test';

async function Login(page, { username, password }) {
 
  // Enter username and password
  await page.fill('xpath=//*[@id="username"]', username);
  await page.fill('xpath=//*[@id="password"]', password);

  // Click the login button
  await page.click('xpath=//*[@id="loginSubmit"]');

  // Verify that the login was successful
  await expect(page.locator('text=Projects Overview')).toBeVisible(); // Wait for the element to appear
}

async function AddCustomerDetails(page, { accountNumber, accountOwner, streetAddress, city, state, zipcode, contactPerson, phoneNumber, contractor }) {
  // Fill in the customer details form
  await page.fill('#account-number', accountNumber);
  await page.fill('#account-owner', accountOwner);
  await page.fill('#address-line1', streetAddress);
  await page.fill('xpath=//*[@id="address-city"]', city);
  await page.selectOption('#address-state', state);
  await page.fill('#address-zipcode', zipcode);
  await page.fill('#building-contact', contactPerson);
  await page.fill('#building-phone', phoneNumber);
  await page.selectOption('#contractor', contractor);

  // Verify that the contractor is selected
  await expect(page.locator('#contractor')).toHaveText(contractor);
}

//TODO  Define the test
test('Login and Add Customer Details', async ({ page }) => {
 

  // // Call AddCustomerDetails with example data
  // await AddCustomerDetails(page, {
  //   accountNumber: '123456',
  //   accountOwner: 'John Doe',
  //   streetAddress: '123 Main St',
  //   city: 'Anytown',
  //   state: 'NY',
  //   zipcode: '12345',
  //   contactPerson: 'Jane Smith',
  //   phoneNumber: '555-1234',
  //   contractor: 'Best Contractor'
  // });
});
