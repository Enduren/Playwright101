import { expect } from '@playwright/test';

// Function to check the job status link
export async function checkJobStatusLink(page) {
  const jobStatusLink = await page.locator('#jobStatusLink').withTimeout(360000);
  await expect(jobStatusLink).toContainText('Initial Assessment Data Entry');
}

// Function to perform login
export async function login(page, { username, password }) {
 
  await page.fill('xpath=//*[@id="username"]', username);
  await page.fill('xpath=//*[@id="password"]', password);
  await page.click('xpath=//*[@id="loginSubmit"]');
  
}

// Function to add customer details
export async function addCustomerDetails(page, details) {
  await page.fill('#account-number', details.accountNumber);
  await page.fill('#account-owner', details.accountOwner);
  await page.fill('#address-line1', details.streetAddress);
  await page.fill('xpath=//*[@id="address-city"]', details.city);
  await page.selectOption('#address-state', details.state);
  await page.fill('#address-zipcode', details.zipcode);
  await page.fill('#building-contact', details.contactPerson);
  await page.fill('#building-phone', details.phoneNumber);

  //selects Mini's Test Contractor  - Virginia Beach, VA 12123
  await page.getByLabel('Select Contractor*').selectOption('d805d8c9-31c7-4357-826f-db86256a8a45');

}

// Function to upload a file
export async function fileUpload(page, { fileType, filePath }) {
  await page.selectOption('#FileType', fileType);
  const fileInput = await page.$('#fileToUpload');
  await fileInput.setInputFiles(filePath);
  await page.click('#uploadFile', { force: true });
  const successMessage = await page.locator('xpath=//*[@id="package-manage"]/form/div/ul/li').textContent();
  expect(successMessage.trim()).toBe('File Uploaded Successfully');
}

// Function to add measures
export async function addMeasures(page, measures) {
  const add = (i) => `//*[@id="measures-form-app-CLT4"]/div[2]/div/div/div[2]/form/div/div/div[${i}]/button`;
  const select = (a, b) => `//*[@id="measures-form-app-CLT4"]/div[2]/div/div/div[2]/form/div/div/div[${a}]/div[${b}]/div[1]/select`;
  const type = (p, q) => `//*[@id="measures-form-app-CLT4"]/div[2]/div/div/div[2]/form/div/div/div[${p}]/div[${q}]/div[2]/div/input`;

  // Example for adding T8/T5 Lamps
  await page.click(add(1));
  await page.selectOption(select(1, 2), measures.T8T5Lamps1);
  await page.fill(type(1, 2), measures.T8T5LampsNo1);

  await page.click(add(1));
  await page.selectOption(select(1, 3), measures.T8T5Lamps2);
  await page.fill(type(1, 3), measures.T8T5LampsNo2);

  await page.click(add(1));
  await page.selectOption(select(1, 4), measures.T8T5Lamps3);
  await page.fill(type(1, 4), measures.T8T5LampsNo3);

  // Repeat for other measures (LED Lamps, Occupancy Sensors, etc.)
}
