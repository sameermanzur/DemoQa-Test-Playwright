# Playwright Automation Demoqa Text Box Form
 The project uses Playwright with the Page Object Model (POM) to automate form submission on DemoQA's Text Box page. 

# Tech Stack
1. Playwright 
2. TypeScript
3. Page Object Model (POM) 

# Installation 
`npm install` 

# Purpose of the Framework 
The goal of the framework is to automate UI testing for the DemoQA Website using the Playwright test tool. Specifically, this project tests the Text Box form, simulating real user actions like navigating the site, entering the data, clicking submit, and verifying outpiut. 
I adopted the Page Object Model (POM)- design pattern to keep my framework maintainable, reusable and scalable. 

# Design Approach
1. Followed the Page Object Model (POM) to keep selectors and logic encapsulated
2. Separated test data and reusable functions into their own modules
3. Used async/await for reliable execution and better readability

# Framework Componenets 
1. *BasePage- The Foundation* 
This abstract acts as the common parent class for all page objects. It contains generic helper methods used by any specific page class. 
 Key Methods:
 . navigate(path:string)- Navigates to any path on the base URL. 
 . clickElemenet(locator:string)- Clicks any element on the page using its locator. 

2. *ElementsTextBoxPage* – This class extends BasePage and represents the Text Box form page on the DemoQA website. It contains:
All the locators used on that page (buttons, text fields, etc.)
Actions a user might perform (navigating to the page, filling out the form, validating output)

Custom Methods:
1. navigate() – Goes to DemoQA homepage, clicks "Elements", and then "Text Box".
2. fillForm(...) – Fills in the full name, email, current and permanent addresses, then clicks submit.
3. validateOutput(...) – Confirms the output section displays the correct name and email after form submission.

# Test Plan 
* Navigation
-Iterate through each menu selection and verify correct page load
* Select Elements- clicking the elements reveal Text box
* Fill- the form with the text in the Text box
* Submit- click the submit button displays the output. 
  


  









