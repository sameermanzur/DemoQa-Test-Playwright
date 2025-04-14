import { test } from '@playwright/test';
import { elementsTextBoxPage } from '../pages/elementsTextBoxPage';
import { textInput } from '../data/textBoxdata';

test('Submit form on DemoQA Text Box page', async ({ page }) => {
  const textBoxPage = new elementsTextBoxPage(page);

  await textBoxPage.navigate();
  await textBoxPage.fillForm(
    textInput.name,
    textInput.email,
    textInput.currentAddress,
    textInput.permanentAddress
  );
  await textBoxPage.validateOutput(textInput.name, textInput.email);
});


